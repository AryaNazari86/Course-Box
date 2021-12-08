import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../pages/search";
import CoursePreview from "../pages/coursePreview";
import LessonPreview from '../pages/lessonPreview';
import { theme } from "../Themes/theme";

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerMode: "none",
        cardStyle: { backgroundColor: theme.color1 },
      })}
    >
      {/* the search page */}
      <Stack.Screen name="Search" component={Search} />
      {/* the lesson preview page */}
      <Stack.Screen name="Lesson" component={LessonPreview} />
      {/* the home course preview page */}
      <Stack.Screen name="CoursePreview" component={CoursePreview} />
    </Stack.Navigator>
  );
}
