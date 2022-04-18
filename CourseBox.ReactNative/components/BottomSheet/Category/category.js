import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CourseBox from "../../CourseBox/courseBox";
import { GetCoursesByCategory } from "../../../Services/courseService";

export default function BottomSheetCategory({ category, navigation }) {
  const [courses, setCourses] = useState([]);
  const [categoryID, setCategoryID] = useState(category.id);
  const fetchCategoryID = () => {
    setCategoryID(category.id);
  };

  const [dataFetched, setDataFetched] = useState(false);
  const fetchData = async () => {
    try {
      fetchCategoryID();
      console.log("Category:");
      console.log(categoryID);
      GetCoursesByCategory(categoryID).then(async (result) => {
        if (result.successful) {
          result.data.then((data) => {
            setCourses(data);
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (!dataFetched) {
    fetchData();
    setDataFetched(true);
  }
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
    height: 200000,
  },
});
