import React from 'react'
import {View, Text} from 'react-native'


export default class MainProjectInfoScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>{this.props.project.description}</Text>
                <Text>{this.props.project.date}</Text>
                <Text>{this.props.project.location}</Text>
                <Text>{this.props.project.name}</Text>
            </View>
        )
    }
}


