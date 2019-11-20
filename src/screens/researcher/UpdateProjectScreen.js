import React from 'react'
import {View, TextInput, Text, StyleSheet, Picker, Button} from 'react-native'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST

export default class UpdateProjectScreen extends React.Component {
    state = {
        project: this.props.project,
        name: this.props.project.name,
        description: this.props.project.description,
        picker1: this.props.project.status,
        picker2: true,
        stage: 1
    }
    componentDidMount(){
        if (this.state.stage === 1){
            if(this.state.project.closed === 1){
                this.setState({picker2: true, stage: 2})
            } else if (this.state.project.closed === 0){
                this.setState({picker2: false, stage: 2})
            }
        }
       
    }
    handleSubmit = () => {
            fetch(`${BASE_URL}/patch-project-${this.state.project.id}`, {
                method: "patch",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                  name: this.state.name,
                  description: this.state.description,
                  status: this.state.picker1,
                  closed: this.state.picker2
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
                <Button onPress={this.handleSubmit} title='Update Project'/>
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