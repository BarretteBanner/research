import React from 'react'
import {View, TextInput, Text, StyleSheet, Picker, AsyncStorage, Button} from 'react-native'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

export default class NewProjectScreen extends React.Component {
    state = {
        name: "Name",
        description: 'Description',
        picker1: 'Study In Progress',
        picker2: true,
        // researcher_id: 1
    }
    
    handleSubmit = async () => {
        let token = await AsyncStorage.getItem('token')
            fetch(`${BASE_URL}/create-project`, {
                method: "post",
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                  name: this.state.name,
                  description: this.state.description,
                  status: this.state.picker1,
                  closed: this.state.picker2,
                //   researcher_id: this.state.researcher_id
                })
            })
        }
    render(){
        return(
            <View>
               <View style={styles.view1}>
                <TextInput 
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={newTerm => this.setState({name: newTerm})}
                    multiline
                />
                <TextInput 
                    style={styles.input}
                    value={this.state.description}
                    onChangeText={newTerm => this.setState({description: newTerm})}
                    multiline
                    />
               </View>
               <View style={styles.overViews}>
                <View style={styles.pickerView}>
                        <Picker 
                            selectedValue={this.state.picker1}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({picker1: itemValue})
                        }>
                            <Picker.Item label="Study In Progress" value='Study In Progress' />
                            <Picker.Item label="Pending" value='Pending' />
                            <Picker.Item label="Completed" value='Completed' />
                        </Picker>
                </View>
                <View style={styles.pickerView}>
                    <Picker
                            selectedValue={this.state.picker2}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({picker2: itemValue})
                            }>
                                <Picker.Item label='Closed' value={true} />
                                <Picker.Item label="Open" value={false} />
                    </Picker>
                </View>
               </View>
              <View style={styles.button}>
                <Button onPress={this.handleSubmit} title='Create Project'/>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin: 15
    },
    pickerView:{
        width: '50%',
    },
    view1:{
        
    },
    overViews:{
        flexDirection: 'row',
    },
    button: {
        marginTop: 10
    }
})

NewProjectScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Create',
    }
}

