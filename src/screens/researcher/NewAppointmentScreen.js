import React from 'react'
import {View, TextInput, Text, StyleSheet, Button} from 'react-native'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

export default class NewAppointmentScreen extends React.Component{
    state = {
        month: '01',
        day: '01',
        year: '2019',
        location: 'Room 101',
        time: '01:00 PM',
        project_id: this.props.project.id,
        user_id: null
    }

    handleSubmit = () => {
        fetch(`${BASE_URL}/create-appointment`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              date: `${this.state.month}/${this.state.day}/${this.state.year}`,
              location: this.state.location,
              time: this.state.time,
              project_id: this.state.project_id,
              user_id: this.state.user_id,
              taken: false
            })
        })
    }
    render() {
        return(
            <View>
                <Text style={styles.title}>New Appointment Screen</Text>
                <View style={styles.view}>
                    <Text style={styles.text}>Month</Text>
                    <TextInput 
                        placeholder='Ex: 01'
                        onChangeText={newTerm =>  this.setState({month: newTerm})}
                        maxLength={2}
                        style={styles.input}
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Day</Text>
                    <TextInput 
                        placeholder='Ex: 05'
                        onChangeText={newTerm =>  this.setState({day: newTerm})}
                        maxLength={2}
                        style={styles.input}
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Year</Text>
                    <TextInput 
                        placeholder='Ex: 2019'
                        onChangeText={newTerm =>  this.setState({year: newTerm})}
                        maxLength={4}
                        style={styles.input}
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Location</Text>
                    <TextInput 
                        placeholder='Ex: Room 101'
                        onChangeText={newTerm =>  this.setState({location: newTerm})}
                        style={styles.input}
                        multiline
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Time</Text>
                    <TextInput 
                        placeholder='01:00 PM'
                        onChangeText={newTerm =>  this.setState({time: newTerm})}
                        style={styles.input}
                        multiline
                    />
                </View>
                <Button onPress={this.handleSubmit} style={styles.label} title='Create New Appointment'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30
    }, 
    view: {
        margin: 15,
        height: 40
    },
    input: {
        flex: 1,
        borderWidth: 1
    },
    text: {
        
    }
})