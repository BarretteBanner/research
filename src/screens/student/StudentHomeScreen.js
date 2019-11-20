import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from 'react-native'
import ProjectItem from '../../components/ProjectItem'
import { Feather } from '@expo/vector-icons'
import {withNavigation} from 'react-navigation'
import ActivityIndicatorComponent from '../../components/ActivityIndicatorComponent'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

class StudentHomeScreen extends React.Component{
    state = {
        projects: [],
        stage: 1,
        // token: await AsyncStorage.getItem('token')
    }
    componentDidMount() {
        this.getProjects()
    }
    getProjects = async () => {
        let token = await AsyncStorage.getItem('token')

        fetch(`${BASE_URL}/get-projects-student`, {
            method: "get",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(projects => this.setState({projects: projects, stage: 2}))
    }
    refresh = () => {
        this.getProjects()
    }
    render(){
        
        if (this.state.stage !== 2){
            return <ActivityIndicatorComponent/>
        }
        return(
            <View>
                <TouchableOpacity onPress={() => this.refresh()}>
                    <Feather name='refresh-cw' size={30} />
                </TouchableOpacity>
                <View>
                    <FlatList 
                        data={this.state.projects}
                        keyExtractor={(project) => (Math.floor(Math.random() * 10000)).toString()}
                        renderItem={(project) => {
                            return <TouchableOpacity onPress={() => this.props.navigation.navigate('StudentSpecificStudy', {project: project.item})}>
                                    <ProjectItem project={project.item} />
                                </TouchableOpacity>
                            
                        }}
                    />
                </View>
            </View>
        )
    }
}

StudentHomeScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Upcoming Appointments',
        headerRight: 
            <TouchableOpacity onPress={() => navigation.navigate('AllProjects')}>
                <Feather name='plus' size={30} />
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 10
    }
})

export default withNavigation(StudentHomeScreen)