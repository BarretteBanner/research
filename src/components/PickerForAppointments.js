import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import AppointmentItemForList from './AppointmentItemForList'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

export default class PickerForAppointment extends React.Component{
    state={
        appointments: []
    }

    //fetch request here using the project id (this.props.project.id) to get the OPEN appointments
    getAppointments = () => {
        fetch(`${BASE_URL}/get-class-open-appointments-${this.props.project.id}`)
        .then(resp => resp.json())
        .then(appointments => this.setState({appointments: appointments}))
    }
    componentDidMount(){
        this.getAppointments()
    }
    render(){
        return(
            <View>
                <FlatList 
                        data={this.state.appointments}
                        keyExtractor={(appointment) => appointment.id.toString()}
                        renderItem={(appointment) => {
                            return <AppointmentItemForList appointment={appointment.item} />
                        }}
                />
            </View>
        )
    }
}