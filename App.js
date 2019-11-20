import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResearcherHomeScreen from './src/screens/researcher/ResearcherHomeScreen'
import AllProjectsScreen from './src/screens/student/AllProjectsScreen'
import NewProjectScreen from './src/screens/researcher/NewProjectScreen'
import NewLinkScreen from './src/screens/researcher/NewLinkScreen'
import NewAnnouncementScreen from './src/screens/researcher/NewAnnouncementScreen'
import NewAppointmentScreen from './src/screens/researcher/NewAppointmentScreen'
import ResearcherSpecificStudyScreen from './src/screens/researcher/ResearcherSpecificStudyScreen'
import ChooseFormScreen from './src/screens/researcher/ChooseFormScreen';
import StudentHomeScreen from './src/screens/student/StudentHomeScreen';
import StudentSpecificStudyScreen from './src/screens/student/StudentSpecificStudyScreen'
import ChooseAppointmentScreen from './src/screens/student/ChooseAppointmentScreen';
import AppointmentItemForList from './src/components/AppointmentItemForList';
import LoginScreen from './src/screens/first/LoginScreen';
import SignupScreen from './src/screens/first/SignupScreen';

const navigator = createStackNavigator({
  ResearcherHomeScreen: ResearcherHomeScreen,
  AllProjects: AllProjectsScreen,
  NewProject: NewProjectScreen,
  NewLink: NewLinkScreen,
  NewAnnouncement: NewAnnouncementScreen,
  NewAppointment: NewAppointmentScreen,
  ResearcherSpecificStudy: ResearcherSpecificStudyScreen,
  ChooseForm: ChooseFormScreen,
  StudentHome: StudentHomeScreen,
  AllProjects: AllProjectsScreen,
  StudentSpecificStudy: StudentSpecificStudyScreen,
  ChooseAppointment: ChooseAppointmentScreen,
  ChooseTime: AppointmentItemForList,
  Login: LoginScreen,
  Signup: SignupScreen
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    title: 'Study Finder'
  }
})

export default createAppContainer(navigator)