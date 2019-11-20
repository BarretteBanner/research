import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class SearchBar extends React.Component{
    state = {
        projects: this.props.projects,
        phrase: ''
    }
    render(){
        return (
            <View style={styles.backgroundStyle}>
                <FontAwesome name='search' style={styles.iconStyle}/>
                <TextInput 
                    placeholder='Search'
                    style={styles.inputStyle}
                    onChangeText={newTerm => this.props.filter(newTerm)}
                />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle:  {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

