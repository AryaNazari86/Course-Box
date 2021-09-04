import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from '../pages/profile';
import Search from '../pages/search';
import { globalStyles } from '../shared/globalStyle';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: '#FCA311',
                    tabBarInactiveTintColor: '#E5E5E5',
                    tabBarStyle: globalStyles.tabBar,
                })}>
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? 'account-box' : 'account-box-outline'} size={focused ? 30 : 25} color={focused ? '#FCA311' : '#E5E5E5'} />
                    )
                }} />
                <Tab.Screen name="Search" component={Search} options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? 'card-search' : 'card-search-outline'} size={focused ? 30 : 25} color={focused ? '#FCA311' : '#E5E5E5'} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer >
    );
};

export default Tabs;