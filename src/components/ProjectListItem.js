import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import {withNavigation} from 'react-navigation'


class ProjectListItem extends React.Component{
    render(){
        return(
            <View style={styles.item}>
                <View style={styles.view1}>
                    <Text style={styles.name}>{this.props.project.name}</Text>
                </View>
                <View style={styles.view3}>
                    <Text>{this.props.project.description}</Text>
                </View>
                <View style={styles.view2}>
                    <Button 
                        title='Choose Time/Date'
                        onPress={() => this.props.navigation.navigate('ChooseAppointment', {project: this.props.project})}
                        style={styles.button}
                    />
                </View>
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item:{
        borderTopWidth: 1,
        padding: 5,
        borderColor: 'grey',
        flex: 1
    },
    name:{
        fontSize: 22,
        alignSelf: 'center',
        backgroundColor: 'deepskyblue',
        textAlign: 'center'
    },
    button:{
      
    },
    view1: {
        
    },
    view2:{
        
        
        backgroundColor:'white'
    },
    view3:{
        backgroundColor: 'deepskyblue',
        marginHorizontal: 8,
        alignSelf: 'center'
    },
    line:{
        borderTopWidth: 1,
        marginTop: 25
    }
})

export default withNavigation(ProjectListItem)