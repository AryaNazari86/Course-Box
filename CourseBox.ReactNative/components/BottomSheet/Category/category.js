import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import courses from "../../../data/courses";
import CourseBox from "../../CourseBox/courseBox";

export default function BottomSheetCategory({ category, navigation }) {
  return (
    <View style={[{ backgroundColor: "#ff9736" }, styles.content]}>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <CourseBox item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
});
