import React from 'react'
import {View, TextInput, StyleSheet, Text, Button} from 'react-native'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

export default class SignupScreen extends React.Component{
    state = {
        username: null,
        password: null
    }
    handleSubmit = () => {
        fetch(`${BASE_URL}/users`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            })
        })
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
                <Button onPress={this.handleSubmit} title='Register'/>
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