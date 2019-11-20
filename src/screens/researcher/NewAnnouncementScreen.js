import React from 'react'
import {View, TextInput, Text, StyleSheet, Button} from 'react-native'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST


export default class NewAnnouncementScreen extends React.Component{
    state={
        message: 'message',
        project_id: this.props.project.id
    }

    handleSubmit = () => {
        console.log('post request going out')
        fetch(`${BASE_URL}/create-announcement`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              message: this.state.message,
              project_id: this.state.project_id
            })
        })
    }
    render() {
        // make sure project id comes in from props 
        return(
            <View>
                <View style={styles.view}>
                    <Text>Message</Text>
                    <TextInput 
                        onChangeText={newTerm => this.setState({message: newTerm})}
                        style={styles.input}
                        placeholder='Message'
                    />
                </View>
                
                <Button onPress={this.handleSubmit}title='Create New Announcement'/>
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