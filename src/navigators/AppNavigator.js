import { createAppContainer, createStackNavigator } from 'vue-native-router';

import { NavigatorName } from '.';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import SplashScreen from '../screens/SplashScreen';

const StackNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: NavigatorName.Splash,
    headerMode: 'none',
  },
);
const AppNavigator = createAppContainer(StackNavigator);
export default AppNavigator;
