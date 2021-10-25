import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CoursePreview from "../pages/coursePreview";
import LessonPreview from "../pages/lessonPreview";

const Stack = createStackNavigator();

export default function LessonStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Course" component={CoursePreview} />
            <Stack.Screen name="Lesson" component={LessonPreview} />
        </Stack.Navigator>
    )
}