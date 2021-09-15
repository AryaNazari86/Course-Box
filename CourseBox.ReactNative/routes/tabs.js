import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import SearchStack from './searchStack';
import ProfileStack from './profileStack';
import { globalStyles } from '../shared/globalStyle';
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarStyle: globalStyles.tabBar,
        headerShown: false
      }}>
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require('../assets/Icons/search-focused.png')
              : require('../assets/Icons/search.png');
            return <Image style={{ height: 50, width: 50 }} source={icon} />;
          }
        }} />
      <Tab.Screen name="HomeStack"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require('../assets/Icons/house-focused.png')
              : require('../assets/Icons/house.png');
            return <Image style={{ height: 50, width: 50 }} source={icon} />;
          }
        }} />
      <Tab.Screen name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require('../assets/Icons/user-focused.png')
              : require('../assets/Icons/user.png');
            return <Image style={{ height: 50, width: 50 }} source={icon} />;
          }
        }} />
    </Tab.Navigator>
  );
}