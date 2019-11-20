import React from 'react'
import {View, Text, Picker, Button, StyleSheet} from 'react-native'
import PickerForAppointment from '../../components/PickerForAppointments'
import ActivityIndicatorComponent from '../../components/ActivityIndicatorComponent'

export default class ChooseAppointmentScreen extends React.Component{
    state = {
        project: null
    }
    handlestuff = () => {
        const project = this.props.navigation.getParam('project')
        this.setState({project: project})
    }
    componentDidMount(){
        this.handlestuff()
    }
    render() {
        if(this.state.project === null){
            return <ActivityIndicatorComponent/>
        }
        return(
            <View>
                <PickerForAppointment project={this.state.project}/>
            </View>
        )
    }
}

ChooseAppointmentScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: `Available Appointments`,
    }
}

const styles = StyleSheet.create({
    
})