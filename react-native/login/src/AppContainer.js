import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,     // Typically another navigator
      Login: LoginScreen,
      SignUp: SignUpScreen,
    },
    {
      initialRouteName: 'Login',
    },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;


