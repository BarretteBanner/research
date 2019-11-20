import React from 'react'
import {View, TextInput, StyleSheet, Text, Button, AsyncStorage, Alert } from 'react-native'

let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

export default class LoginScreen extends React.Component{
    state = {
        username: null,
        password: null
    }
    redirectResearcher = () => {
        this.props.navigation.navigate('ResearcherHomeScreen')
    }
    redirectStudent = () => {
        this.props.navigation.navigate('StudentHome')
    }
    handleSubmitResearcher = () => {
        fetch(`${BASE_URL}/login`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
                // 'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            })
        }).then( res => res.json())
        .then( async ({ success, token }) => {
            if(success){
                await AsyncStorage.setItem('token', token)
                this.redirectResearcher()
            }
            else {
                this.showAlert()
            }
            // let token = await AsyncStorage.getItem('token)
        } )
    }

    handleSubmitStudent = () => {
        fetch(`${BASE_URL}/login`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
                // 'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            })
        }).then( res => res.json())
        .then( async ({ success, token }) => {
            if(success){
                await AsyncStorage.setItem('token', token)
                this.redirectStudent()
            }
            else {
                this.showAlert()
            }
            // let token = await AsyncStorage.getItem('token)
        } )
        .catch()
    }


    showAlert = () => {
        Alert.alert(
            `Error:`,
            `Please Try Again`,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              }
            ],
            {cancelable: false},
          );
    }
    render(){
        return(
            <View>
                <View style={styles.view}>
                    <TextInput 
                        placeholder='Username'
                        onChangeText={newTerm => this.setState({username: newTerm})}
                        style={styles.input}
                        multiline
                    />
                </View>
                <View style={styles.view}>
                    <TextInput 
                        placeholder='Password'
                        onChangeText={newTerm => this.setState({password: newTerm})}
                        style={styles.input}
                        multiline
                    />
                </View>
                <Button onPress={this.handleSubmitResearcher} title='Researcher Login'/>
                <Button onPress={this.handleSubmitStudent} title='Student Login'/>
                <View style={styles.signup}>
                    <Button  title='Signup' onPress={() => this.props.navigation.navigate('Signup')}/>
                </View>
                
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
    signup:{
        alignSelf: 'flex-start',
        backgroundColor: 'blue'
    }
})