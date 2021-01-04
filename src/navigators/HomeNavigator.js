import { createStackNavigator } from 'vue-native-router';
import { NavigatorName } from '.';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
  },
  {
    initialRouteName: NavigatorName.Home,
  },
);
export default HomeStackNavigator;
