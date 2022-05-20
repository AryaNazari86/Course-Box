import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CourseBox from "../../CourseBox/courseBox";
import { GetCoursesByCategory } from "../../../Services/courseService";
import { theme } from "../../../Themes/theme";

export default function BottomSheetCategory({ category, navigation }) {
  const [courses, setCourses] = useState([]);
  const [lastCategory, setLastCategory] = useState(category.id);
  const [dataFetched, setDataFetched] = useState(false);
  const fetchData = async () => {
    GetCoursesByCategory(category.id).then(async (result) => {
      if (result.successful) {
        result.data.then((result) => {
          setCourses(result);
          setDataFetched(true);
        });
      }
    });
  };

  if (!dataFetched && lastCategory != category.id) {
    fetchData();
  }
  return (
    <View style={[{ backgroundColor: theme.color2 }, styles.content]}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
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
    height: 200000,
  },
});
