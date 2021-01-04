import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'vue-native-router';

import HomeStackNavigator from './HomeNavigator';
import SettingsStackNavigator from './SettingsNavigator';

const tabBarIconSize = 24;
const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={tabBarIconSize} />
      ),
    },
  },
  Settings: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" color={tintColor} size={tabBarIconSize} />
      ),
    },
  },
});
export default MainNavigator;
