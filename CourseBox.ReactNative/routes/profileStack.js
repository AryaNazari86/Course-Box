import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../pages/profile";
import CoursePreview from "../pages/coursePreview";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerMode: "none",
        cardStyle: { backgroundColor: "#141D28" },
      })}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CoursePreview" component={CoursePreview} />
    </Stack.Navigator>
  );
}
