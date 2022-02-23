import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  Text,
  InteractionManager,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// Header Imports
import Header from "../shared/header";

import * as CourseService from "../Services/courseService";
// Category Box Imports
import CategoryBox from "../components/Categorybox/categorybox";

// Bottom Sheet Imports
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import BottomSheetHeader from "../components/BottomSheet/Header/header";
import BottomSheetCategory from "../components/BottomSheet/Category/category";
import getLang from "../lang/lang";
// Carousel Imports
import CoursesCarousel from "../components/Carousel/coursesCarousel";

// Courses Data
import courses from "../data/courses";

// Lottie Library
import LottieView from "lottie-react-native";
// Global Styles
import { globalStyles, Theme } from "../shared/globalStyle";

// Theme colors
import { theme } from "../Themes/theme";

export default function Home({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(async function () {
    setLoaded(true);
  });

  // Access bottom sheet using sheetRef.current;
  const bottomSheetRef = useRef(null);

  // Some styles for Dark Screen.
  const [darkScreen, setDarkScreen] = useState({ width: 0, height: 0 });

  // Get Categories From API
  const [latestCourses, setLatestCourses] = useState([]);
  const [popularCorurses, setPopularCourses] = useState([]);

  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.24.252:5000/LatestCourses");
      const courses = await response.json();
      setLatestCourses(courses);
      const response1 = await fetch(
        "http://192.168.24.252:5000/PopularCourses"
      );
      const courses1 = await response1.json();
      setPopularCourses(courses1);
    } catch (error) {
      console.log(error);
    }
  };
  if (!dataFetched) {
    fetchData();
    setDataFetched(true);
  }

  useEffect(() => {
    // fetchDatas();
  }, []);
  const categories = [
    {
      categoryId: 1,
      categoryTitle: "Maths",
      categoryIcon: "math-compass",
      categoryIconColor: "#323ca8",
      categoryBgColor: "#9ba4f2",
    },
    {
      categoryId: 2,
      categoryTitle: "Computer",
      categoryIcon: "code-tags",
      categoryIconColor: "#8c4f15",
      categoryBgColor: "#ff9736",
    },
    {
      categoryId: 3,
      categoryTitle: "Sports",
      categoryIcon: "volleyball",
      categoryIconColor: "#5e1532",
      categoryBgColor: "#ff3686",
    },
    {
      categoryId: 4,
      categoryTitle: "Science",
      categoryIcon: "atom-variant",
      categoryIconColor: "#166958",
      categoryBgColor: "#36ffd7",
    },
    {
      categoryId: 5,
      categoryTitle: "Art",
      categoryIcon: "palette",
      categoryIconColor: "#942700",
      categoryBgColor: "#ffa787",
    },
  ];

  // Clicked CategoryId will be here.
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // When user click on a category.
  const onCategoryClicked = (category) => {
    setSelectedCategory(category);
    if (bottomSheetRef != null) {
      bottomSheetRef.current.snapTo(1);
      setDarkScreen({ width: "100%", height: "100%" });
    }
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.snapTo(0);

    setDarkScreen({ width: "0%", height: "0%" });
  };

  if (loaded && dataFetched) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <Header
          title="Home"
          height={60}
          profileButton={true}
          profileAction={() => navigation.navigate("ProfileStack")}
          headerIcon={true}
          headersIconSource={require("../assets/3DIcons/Math_3DIcon.png")}
        />

        <ImageBackground
          source={require("../assets/Images/Backgrounds/b05ed9832a0663c2e80b846604e157d3.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <ScrollView
            style={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View>
              {/* Categories */}
              <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesContainer}
                horizontal={true}
                data={categories}
                keyExtractor={(item) => item.categoryId.toString()}
                renderItem={({ item }) => (
                  <CategoryBox
                    category={item}
                    onPress={() => onCategoryClicked(item)}
                  />
                )}
              />

              <View style={styles.latestCoursesContainer}>
                <Text style={styles.latestCoursesTitle}>Latest Courses</Text>

                {/* A carousel for showing the latest courses. */}
                <CoursesCarousel
                  courses={latestCourses}
                  navigation={navigation}
                  dotesColor={theme.color3}
                />
              </View>

              <View style={styles.popularCoursesContainer}>
                <Text style={styles.popularCoursesTitle}>Popular Courses</Text>

                {/* A carousel for showing the popular courses. */}
                <CoursesCarousel
                  courses={popularCorurses}
                  navigation={navigation}
                  dotesColor={theme.color3}
                />
              </View>
            </View>
          </ScrollView>

          {/* When we open category bottom sheet, the screen will become dark. */}
          <TouchableWithoutFeedback onPress={() => closeBottomSheet()}>
            <View style={[darkScreen, styles.darkScreen]}></View>
          </TouchableWithoutFeedback>

          {/* Bottom Sheet for categories */}
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[0, "80%", "40%"]}
            renderHeader={() => (
              <BottomSheetHeader category={selectedCategory} />
            )}
            renderContent={() => (
              <BottomSheetCategory
                category={selectedCategory}
                navigation={navigation}
              />
            )}
            enabledInnerScrolling={true}
            enabledContentGestureInteraction={false}
            onCloseEnd={() => setDarkScreen({ width: 0, height: 0 })}
          />
        </ImageBackground>
      </View>
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
    flex: 1,
  },
  contentContainer: {
    flexDirection: "column",
  },
  categoriesContainer: {
    flexDirection: "row",
  },
  latestCoursesTitle: {
    fontFamily: "rubik-regular",
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 10,
    color: theme.color3,
  },
  latestCoursesContainer: {
    paddingTop: 20,
  },
  popularCoursesTitle: {
    fontFamily: "rubik-regular",
    fontSize: 24,
    textAlign: "center",
    color: theme.color3,
    paddingBottom: 10,
  },
  popularCoursesContainer: {
    backgroundColor: theme.color2,
    paddingTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  darkScreen: {
    position: "absolute",
    top: 0,
    backgroundColor: "#000",
    opacity: 0.4,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
