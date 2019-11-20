import React from 'react'
import {View, FlatList, StyleSheet, ScrollView} from 'react-native'
import LinkItem from '../../components/LinkItem'


export default class LinkScreen extends React.Component{
    render(){
        return(
            <View>
                <ScrollView style={styles.link}>
                    <View style={styles.borderLine}/>
                    <FlatList 
                        data={this.props.links}
                        keyExtractor={(link) => link.id.toString()}
                        renderItem={(link) => {
                            return <LinkItem link={link.item} />
                        }}
                    />
                    <View style={styles.borderLine}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    borderLine:{
        borderTopWidth: 1,
        marginHorizontal: 5
    },
   

})
