import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ProjectItem extends React.Component{
    render(){
        return(
            <View style={styles.item}>
                <Text style={styles.name}>{this.props.project.name}</Text>
                <Text>{this.props.project.location}</Text>
                <Text>{this.props.project.date}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item:{
        borderTopWidth: 1,
        padding: 5,
        borderColor: 'grey'
    },
    name:{
        fontSize: 22
    }
})