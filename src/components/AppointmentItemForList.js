import React from 'react'
import {View, Text, Button, StyleSheet, Alert, AsyncStorage} from 'react-native'
import {withNavigation} from 'react-navigation'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

class AppointmentItemForList extends React.Component{
    state ={
        modalVisible: false,
        selectedProject: this.props.project, 
       
    }
    handleSubmit = async () => {
        let token = await AsyncStorage.getItem('token')
        fetch(`${BASE_URL}/patch-appointment-${this.props.appointment.id}`, {
            method: "patch",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              date: `${this.props.appointment.month}/${this.props.appointment.day}/${this.props.appointment.year}`,
              location: this.props.appointment.location,
              project_id: this.props.appointment.project_id,
              taken: true
            })
        })
    }
   
        showAlert = () => {
            Alert.alert(
                `${this.props.appointment.location}`,
                `${this.props.appointment.date}`,
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Confirm', onPress: () => this.handleSubmit()},
                ],
                {cancelable: false},
              );
        }
   
    
    render(){
        return(
        <View style={styles.item}>
                <View style={styles.view1}>
                    <Text style={styles.name}>{this.props.appointment.location}</Text>
                    <Button 
                        title='Add'
                        onPress={() => this.showAlert()}
                        style={styles.button}
                    />
                </View>
                <Text>{this.props.appointment.date}</Text>
                <Text>{this.props.appointment.time}</Text>
                <View style={styles.container}>
                </View>
                
            </View>
        )
    }
}














const styles = StyleSheet.create({
    item:{
        borderTopWidth: 1,
        padding: 5,
        borderColor: 'grey',
    },
    name:{
        fontSize: 22,
        alignSelf: 'center'
    },
    button:{
      
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey'
      },
      innerContainer: {
        alignItems: 'center',
        borderWidth: 1
      },
      buttonArea:{
          flexDirection: 'row'
      }
   
})

export default withNavigation(AppointmentItemForList)