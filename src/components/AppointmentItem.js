import React from 'react'
import {View, Text, StyleSheet, Linking, Button} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default class AppointmentItem extends React.Component{
    render(){
        return(
            <View style={styles.item}>
                <FontAwesome name='circle' size={15} style={styles.icon}/>
                <Text style={styles.text}>{this.props.appointment.date} | {this.props.appointment.location} | {this.props.appointment.time}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginLeft: 5,
        borderBottomWidth: 1,
        height: 50
    },
    icon: {
        marginRight: 5,
        alignSelf: 'center'
    },
    text: {
        alignSelf: 'center'
    }
})