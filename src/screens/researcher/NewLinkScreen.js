import React from 'react'
import {View, TextInput, Text, StyleSheet, Button} from 'react-native'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

export default class NewLinkScreen extends React.Component{
    state = {
        name: 'name',
        url: 'www.example.com',
        projectid: this.props.project.id
    }

    handleSubmit = () => {
        fetch(`${BASE_URL}/create-link`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              link_title: this.state.name,
              url: this.state.url,
              project_id: this.state.projectid
            })
        })
    }
    render(){
        return(
            <View>
                <Text style={styles.title}>New Link Screen</Text>
                <View style={styles.view}>
                    <TextInput 
                        placeholder='Ex: Bryce'
                        onChangeText={newTerm => this.setState({name: newTerm})}
                        style={styles.input}
                        multiline
                    />
                </View>
                <View style={styles.view}>
                    <TextInput 
                        placeholder='www.example.com'
                        onChangeText={newTerm => this.setState({url: newTerm})}
                        style={styles.input}
                        multiline
                    />
                </View>
                <Button onPress={this.handleSubmit} title='Create New Link'/>
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