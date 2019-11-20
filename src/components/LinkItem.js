import React from 'react'
import {View, Text, StyleSheet, Linking, Button} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default class LinkItem extends React.Component{
    render(){
        return(
            <View style={styles.item}>
                <FontAwesome name='circle' size={15} style={styles.icon}/>
                <Button  onPress={() => {Linking.openURL(this.props.link.url);}} title={this.props.link.link_title}/>
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
    }
})