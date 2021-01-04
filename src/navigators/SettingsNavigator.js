import { createStackNavigator } from 'vue-native-router';
import { NavigatorName } from '.';

import SettingsScreen from '../screens/SettingsScreen';

const SettingsStackNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NavigatorName.Settings,
  },
);
export default SettingsStackNavigator;
