import React from 'react'
import {View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import LinkItem from '../../components/LinkItem'
import AnnouncementItem from '../../components/AnnouncementItem'
import AppointmentItem from '../../components/AppointmentItem'
import { Feather } from '@expo/vector-icons'
import {withNavigation} from 'react-navigation'
import ActivityIndicatorComponent from '../../components/ActivityIndicatorComponent'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST



class ResearcherSpecificStudyScreen extends React.Component{
    state = {
        project: null,
        stage: 0,
        links: [],
        announcements: [],
        appointments: []
    }
        handlestuff = () => {
            const project = this.props.navigation.getParam('project')
            this.setState({project: project, stage: 2})
        }
        getLinks = () => {
            fetch(`${BASE_URL}/get-links-project-${this.state.project.id}`)
            .then(resp => resp.json())
            .then(links => this.setState({links: links}))
        }
        getAnnouncements = () => {
            fetch(`${BASE_URL}/get-announcements-project-${this.state.project.id}`)
            .then(resp => resp.json())
            .then(announcements => this.setState({announcements: announcements}))
        }
        getTakenAppointments = () => {
            fetch(`${BASE_URL}/get-class-taken-appointments-${this.state.project.id}`)
            .then(resp => resp.json())
            .then(appointments => this.setState({appointments: appointments, stage: 3}))
        }
        componentDidMount() {
            this.handlestuff()
        }
        componentDidUpdate(){
            if (this.state.stage === 2){
                this.getTakenAppointments()
                this.getLinks()
                this.getAnnouncements()
            }
        }
        refresh = () => {
            this.getTakenAppointments()
            this.getLinks()
            this.getAnnouncements()
        }
        render(){
            if(this.state.stage !== 3){
                return <ActivityIndicatorComponent/>
            }
        return(
            <View>
                <TouchableOpacity onPress={() => this.refresh()}>
                    <Feather name='refresh-cw' size={30} />
                </TouchableOpacity>
                <View style={styles.top2}>
                    <ScrollView style={styles.link}>
                        <Text style={styles.title}>Links</Text>
                        <View style={styles.borderLine}/>
                        <FlatList 
                        data={this.state.links}
                        keyExtractor={(link) => link.id.toString()}
                        renderItem={(link) => {
                            return <LinkItem link={link.item} />
                        }}
                        />
                        <View style={styles.borderLine}/>
                    </ScrollView>
                    <ScrollView style={styles.announcement}>
                        <Text style={styles.title}>Announcements</Text>
                        <View style={styles.borderLine}/>
                        <FlatList 
                        data={this.state.announcements}
                        keyExtractor={(announcement) => announcement.id.toString()}
                        renderItem={(announcement) => {
                            return <AnnouncementItem announcement={announcement.item} />
                        }}
                        />
                         <View style={styles.borderLine}/>
                    </ScrollView>
                </View>
                <View style={styles.appointments}>
                    <Text style={styles.title}>Appointments</Text>
                    <FlatList 
                        data={this.state.appointments}
                        keyExtractor={(appointment) => appointment.id.toString()}
                        renderItem={(appointment) => {
                            return <AppointmentItem appointment={appointment.item} />
                        }}
                        />
                </View>
            </View>
        )   
    }
}

ResearcherSpecificStudyScreen.navigationOptions = ({navigation}) => {
    return{
        headerTitle: navigation.state.params.project.name,
        headerRight: 
            <TouchableOpacity onPress={() => navigation.navigate('ChooseForm', {project: navigation.state.params.project})}>
                <Feather name='plus' size={30} />
            </TouchableOpacity>
    }
}


const styles = StyleSheet.create({
    top2:{
        flexDirection: 'row',
       
        height: '30%',
        marginHorizontal: 5
    },
    link:{
        flex: 1
    },
    announcement: {
        flex: 1
    },
    appointments:{
       backgroundColor: 'white',
       height: '70%'
    },
    borderLine:{
        borderTopWidth: 1,
        marginHorizontal: 5
    },
    title:{
        textAlign: 'center'
    }

})

export default withNavigation(ResearcherSpecificStudyScreen)