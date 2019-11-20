import React from 'react'
import {View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Button} from 'react-native'
import { Feather } from '@expo/vector-icons'
import LinkScreen from './LinksScreen'
import ActivityIndicatorComponent from '../../components/ActivityIndicatorComponent'
import AnnouncementsScreen from './AnnouncementsScreen'
import MainProjectInfoScreen from './MainProjectInfoScreen'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

class StudentSpecificStudyScreen extends React.Component{
    state = {
        project: null,
        links: [],
        announcements: [],
        appointments: [],
        component: 'main',
        stage: 1,
        
    }
        handlestuff = () => {
            const project = this.props.navigation.getParam('project')
            this.setState({project: project})
        }
        getLinks = () => {
            fetch(`${BASE_URL}/get-project-links-1`)
            .then(resp => resp.json())
            .then(links => this.setState({links: links, stage: 2}))
        }
        getAnnouncements = () => {
            fetch(`${BASE_URL}/get-project-announcements-1`)
            .then(resp => resp.json())
            .then(announcements => this.setState({announcements: announcements}))
        }
        
        componentDidMount() {
            this.handlestuff()
            this.getLinks()
            this.getAnnouncements()
        }
        refresh = () => {
            this.getLinks()
            this.getAnnouncements()
        }
        
        render(){
            // console.log(this.props.navigation.state.params.project)
            let component = null
            if (this.state.stage !== 2){
                return <ActivityIndicatorComponent/>
            }
            else if (this.state.component === 'links'){
                component = <LinkScreen links={this.state.links}/>
            }
            else if (this.state.component === 'announcements'){
                component = <AnnouncementsScreen announcements={this.state.announcements}/>
            }
            else if (this.state.component === 'main'){
                component = <MainProjectInfoScreen project={this.state.project}/>
            }
        return(
            <View>
                <TouchableOpacity onPress={() => this.refresh()}>
                    <Feather name='refresh-cw' size={30} />
                </TouchableOpacity>
                <View style={styles.buttons}>
                    <Button title='Links' onPress={() => this.setState({component: 'links'})}/>
                    <Button title='Announcements' onPress={() => this.setState({component: 'announcements'})}/>
                    <Button title='Main' onPress={() => this.setState({component: 'main'})}/>
                </View>
               



               {component}
                    
            </View>
        )   
    }
}

StudentSpecificStudyScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: navigation.state.params.project.name
    }
}


const styles = StyleSheet.create({
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center'
    }

})

export default StudentSpecificStudyScreen