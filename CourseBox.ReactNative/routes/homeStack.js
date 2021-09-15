import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import CoursePreview from '../pages/coursePreview';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
                headerMode: 'none'
            })}>
            <Stack.Screen
                name="Home"
                component={Home} />
            <Stack.Screen
                name="CoursePreview"
                component={CoursePreview} />
        </Stack.Navigator>
    );
}