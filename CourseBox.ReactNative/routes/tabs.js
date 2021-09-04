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
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FCA311',
                    tabBarInactiveTintColor: '#6f83ad',
                    tabBarStyle: globalStyles.tabBar,
                })}>
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? 'account-box' : 'account-box-outline'} size={30} color={focused ? '#FCA311' : '#6f83ad'} />
                    )
                }} />
                <Tab.Screen name="Search" component={Search} options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? 'card-search' : 'card-search-outline'} size={30} color={focused ? '#FCA311' : '#6f83ad'} />
                    ),
                }} />
                
            </Tab.Navigator>
        </NavigationContainer >
    );
};

export default Tabs;