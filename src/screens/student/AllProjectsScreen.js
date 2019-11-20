import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import SearchBar from '../../components/SearchBar'
import ProjectListItem from '../../components/ProjectListItem'
import {withNavigation} from 'react-navigation'
import ActivityIndicatorComponent from '../../components/ActivityIndicatorComponent'
let LOCAL_HOST = `http://localhost:3000`
let DESTINATION_ADDRESS = `http://10.185.7.164:3000`
let BASE_URL = LOCAL_HOST


class AllProjectsScreen extends React.Component{
    state = {
        projects: [],
        phrase: '',
        projectToUse: []
    }
    componentDidMount() {
        this.getProjects()
    }
    getProjects = () => {
        fetch(`${BASE_URL}/get-open-projects`)
        .then(resp => resp.json())
        .then(projects => this.setState({projects: projects, projectsToUse: projects}))
    }

    filter = (phrase) => {
        this.setState({projectsToUse: this.state.projects.filter(project => project.name.toLowerCase().includes(phrase.toLowerCase()))})
       
    }
    render() {
        
        if (this.state.projects.length === 0){
            return <ActivityIndicatorComponent/>
        }
        return (
            <View>
                <SearchBar style={styles.searchBar} filter={this.filter}/>
                <FlatList 
                    style={styles.list}
                    data={this.state.projectsToUse}
                    keyExtractor={(project) => project.id.toString()}
                    renderItem={(project) => {
                        return <ProjectListItem project={project.item} />
                    }}
                />
            </View>
        )
    }
}

AllProjectsScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Available Projects',
    }
}

const styles = StyleSheet.create({
    searchBar :{
        height: '10%'
    },
    list: {
        height: '90%'
    }
})

export default AllProjectsScreen