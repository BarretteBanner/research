import React from 'react'
import {View, Text, StyleSheet, Linking, Button} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default class AnnouncementItem extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.item}>
                    <FontAwesome name='circle' size={15} style={styles.icon}/>
                    <Text style={styles.message}>{this.props.announcement.message}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginHorizontal: 5, 
        borderRightWidth: 1,
        borderLeftWidth: 1
    },
    icon: {
        marginRight: 5,
        alignSelf: 'center'
    },
    message: {
        marginLeft: 5,
        flex: 1
    }
})