import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, Picker} from 'react-native'
import NewAppointmentScreen from './NewAppointmentScreen'
import NewAnnouncementScreen from './NewAnnouncementScreen'
import NewLinkScreen from './NewLinkScreen'
import UpdateProjectScreen from './UpdateProjectScreen'
import ActivityIndicatorComponent from '../../components/ActivityIndicatorComponent'

export default class ChooseFormScreen extends React.Component{
    state = {
        picker1: 'New Appointment',
        project: null
    }
    handlestuff = () => {
        const project = this.props.navigation.getParam('project')
        this.setState({project: project, stage: 2})
    }
    componentDidMount(){
        this.handlestuff()
    }
    render(){
        console.log('we have project', this.state.project)
        let component = null
        if (this.state.project === null){
            return <ActivityIndicatorComponent/>
        } else if (this.state.picker1 === 'New Appointment'){
            component = <NewAppointmentScreen project={this.state.project}/>
        } else if (this.state.picker1 === 'New Announcement'){
            component = <NewAnnouncementScreen project={this.state.project}/>
        } else if (this.state.picker1 === 'New Link'){
            component = <NewLinkScreen project={this.state.project}/>
        } else if (this.state.picker1 === 'Update Project'){
            component = <UpdateProjectScreen project={this.state.project}/>
        }  
       
        return(
            <View>
                <View style={styles.box1}>
                    <Picker
                    selectedValue={this.state.picker1}
                    onValueChange={(itemValue, itemIndex) =>
                    this.setState({picker1: itemValue})
                    }>
                        <Picker.Item label="New Appointment" value='New Appointment' />
                        <Picker.Item label="New Announcement" value='New Announcement' />
                        <Picker.Item label="New Link" value='New Link' />
                        <Picker.Item label="Update Project" value='Update Project' />
                    </Picker>
                </View>
                {component}
            </View>
        )
    }
}

ChooseFormScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Add / Update',
    }
}

const styles = StyleSheet.create({
  
})