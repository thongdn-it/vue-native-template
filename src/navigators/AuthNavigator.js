import { createStackNavigator } from 'vue-native-router';
import { NavigatorName } from '.';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStackNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
  },
  {
    initialRouteName: NavigatorName.SignIn,
  },
);
export default AuthStackNavigator;
