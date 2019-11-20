import React from 'react'
import {View, FlatList, StyleSheet, ScrollView} from 'react-native'
import AnnouncementItem from '../../components/AnnouncementItem'


export default class AnnouncementsScreen extends React.Component{
    render(){
        return(
            <View>
                <ScrollView style={styles.announcements}>
                    <View style={styles.borderLine}/>
                    <FlatList 
                        data={this.props.announcements}
                        keyExtractor={(announcement) => announcement.id.toString()}
                        renderItem={(announcement) => {
                            return <AnnouncementItem announcement={announcement.item} />
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
