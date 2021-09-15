import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../pages/search';
import CoursePreview from '../pages/coursePreview';

const Stack = createStackNavigator();

export default function SearchStack() {
    return (
        <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
                headerMode: 'none'
            })}>
            <Stack.Screen
                name="Search"
                component={Search} />
            <Stack.Screen
                name="CoursePreview"
                component={CoursePreview} />
        </Stack.Navigator>
    );
}