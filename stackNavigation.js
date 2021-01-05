import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import home from '../screens/home';
import SignUp from '../screens/SignUp';
import ManagerSignUp from '../screens/ManagerSignUp';
import UserPage from '../screens/UserPage';
import Loading from '../screens/Loading';
import ManagerPage from '../screens/ManagerPage';
import LoadingtoManager from '../screens/LoadingtoManager';
import ManagerSignIn from '../screens/ManagerSignIn';

const AuthStack = createStackNavigator({
    home: {
        screen: home,
        navigationOptions: {
            //title: 'Welcome'
            headerShown: false
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            //title: ""
            headerShown: false
        }
    },

 
    ManagerSignUp: {
        screen: ManagerSignUp,
        navigationOptions: {
            headerShown: false
        }
    },


    ManagerSignIn: {
        screen: ManagerSignIn,
        navigationOptions: {
            headerShown: false,
            
        }
    }
})

const UserStack = createStackNavigator({
    UserPage: {
        screen: UserPage,
        navigationOptions: {
            headerShown: false,
        }
    },
})

const ManagerStack = createStackNavigator({
    ManagerPage: {
        screen: ManagerPage,
        navigationOptions: {
            headerShown: false,
        }
    },
})

const LoadingStack = createStackNavigator({
    Loading: {
        screen: Loading,
        navigationOptions: {
            headerShown: false
        }
    },
})

const ManagerLoadingStack = createStackNavigator({
    LoadingtoManager: {
        screen: LoadingtoManager,
        navigationOptions: {
            headerShown: false 
        }
    },
})

const App = createSwitchNavigator({
    Loading: LoadingStack,
    LoadingtoManager: ManagerLoadingStack,
    User: UserStack,
    Manager: ManagerStack,
    Auth: AuthStack
},
{
    initialRouteName: 'Loading',
}
)
export default createAppContainer(App);