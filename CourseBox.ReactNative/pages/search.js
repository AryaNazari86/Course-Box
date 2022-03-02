import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  InteractionManager,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import { Chip, TextInput } from "react-native-paper";
import Header from "../shared/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CourseBox from "../components/CourseBox/courseBox";
import coursesData from "../data/courses";
// Lottie Library
import LottieView from "lottie-react-native";
import { theme } from "../Themes/theme";
import SearchCourseBox from "../components/searchCourseBox";
import API_ADDRESS from "../Services/userService";
import { search } from '../Services/courseService';
import { GetAllCategories } from "../Services/courseService";

export default function Search({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });
  const [courses, setCourses] = useState([]);

  const categorySearch = (item) => {
    console.log(item);
    var item = category[item];
    if (item.selected == false) {
      var newSelectedArray = [];
      for (var i = 0; i < category.length; i++) {
        if (i == item.id) {
          newSelectedArray.push({
            title: item.title,
            selected: true,
            id: item.id,
          });
          setSelectedCategory(item.id);
        } else {
          if (category[i].selected == true) {
            newSelectedArray.push({
              title: category[i].title,
              selected: false,
              id: category[i].id,
            });
          } else {
            newSelectedArray.push(category[i]);
          }
        }
      }
      setCategory(newSelectedArray);
    } else {
      var newSelectedArray = [];
      for (var i = 0; i < category.length; i++) {
        if (i == item.id) {
          newSelectedArray.push({
            title: item.title,
            selected: false,
            id: item.id,
          });
        } else if (i == 0) {
          newSelectedArray.push({ title: "All", selected: true, id: "1" });
          setSelectedCategory(0);
        } else {
          newSelectedArray.push(category[i]);
        }
      }
      setCategory(newSelectedArray);
    }
  };
  const [category, setCategory] = useState([]);
  const [categoryFetched, setCategoryFetched] = useState(false);
  const fetchCategories = async () => {
    GetAllCategories().then(async (result) => {
      if (result.successful) {
        let newCategory = [{ title: "All", selected: true, id: "0" }];
        result.data.then((data) => { data.forEach((item) => newCategory.push({ ...item, selected: false })); setCategory(newCategory); console.log('a'); });
      }

    });
  }
  if (categoryFetched == false) {
    fetchCategories();
    console.log(category);
    setCategoryFetched(true);
  }
  const [selectedCategory, setSelectedCategory] = useState(0);

  const Search = (searchValue) => {
    fetch("http://" + API_ADDRESS + "/SearchCourses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        search_value: searchValue,
        category_id: selectedCategory,
      }),
    })
      .then((response) => response.json())
      .then((data) => { setCourses(data); });
  };
  if (loaded) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header
            title="Search"
            height={60}
            profileButton={true}
            profileAction={() => navigation.navigate("ProfileStack")}
          />
          <ScrollView>
            <View style={styles.container}>
              {/* Search Text input */}
              <TextInput
                mode="outlined"
                label="Search"
                onChangeText={(value) => {
                  Search(value.toLowerCase());
                }}
                style={globalStyles.input}
                left={
                  <TextInput.Icon
                    name="magnify"
                    color={theme.color3}
                    style={styles.searchIcon}
                  />
                }
                theme={{
                  colors: {
                    text: theme.color3,
                    primary: theme.color3,
                    placeholder: theme.color3,
                  },
                }}
              />
              {/* Category filters */}
              <ScrollView horizontal={true}>
                {category != undefined ? category.map((item, index) => {
                  return (
                    <Chip
                      mode="flat"
                      style={styles.chip}
                      selected={item.selected}
                      onPress={() => categorySearch(item.id)}
                      textStyle={styles.chipText}
                      selectedColor={theme.color3}
                      key={index}
                    >
                      {item.title}
                    </Chip>
                  );
                }) : <Text>No Categories</Text>}
              </ScrollView>
              {/* Showing Search results */}
              {courses.map((item) => {
                return <SearchCourseBox navigation={navigation} item={item} />;
              })}

              <Text style={globalStyles.emptySpacer}>Code Rangers®</Text>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <View style={globalStyles.loaderContainer}>
        <LottieView
          autoPlay={true}
          loop={true}
          style={globalStyles.loader}
          source={require("../assets/Animations/7751-load.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  chip: {
    justifyContent: "center",
    flexDirection: "row",
    height: 36,
    marginHorizontal: 2,
    backgroundColor: theme.color2,
    borderColor: theme.color1,
    borderWidth: 1,
  },
  chipText: {
    color: theme.color3,
  },
  searchIcon: {
    paddingTop: 9.5,
  },
});
