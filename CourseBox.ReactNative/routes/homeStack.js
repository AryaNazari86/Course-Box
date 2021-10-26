import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";
import CoursePreview from "../pages/coursePreview";
import LessonPreview from '../pages/lessonPreview';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerMode: "none",
        cardStyle: { backgroundColor: "#141D28" },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lesson" component={LessonPreview} />
      <Stack.Screen name="CoursePreview" component={CoursePreview} />
    </Stack.Navigator>
  );
}
