import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../pages/profile";
import CoursePreview from "../pages/coursePreview";
import LessonPreview from '../pages/lessonPreview';
const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerMode: "none",
        cardStyle: { backgroundColor: "#141D28" },
      })}
    >
      {/* the home page */}
      <Stack.Screen name="Profile" component={Profile} />
      {/* the lesson preview page */}
      <Stack.Screen name="Lesson" component={LessonPreview} />
      {/* the home course preview page */}
      <Stack.Screen name="CoursePreview" component={CoursePreview} />
    </Stack.Navigator>
  );
}
