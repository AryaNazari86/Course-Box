import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  Text,
  InteractionManager,
} from "react-native";

// Header Imports
import Header from "../shared/header";

// Category Box Imports
import CategoryBox from "../components/Categorybox/categorybox";

// Bottom Sheet Imports
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import BottomSheetHeader from "../components/BottomSheet/Header/header";
import BottomSheetCategory from "../components/BottomSheet/Category/category";

// Carousel Imports
import CoursesCarousel from "../components/Carousel/coursesCarousel";

// Courses Data
import courses from "../data/courses";

// Lottie Library
import LottieView from "lottie-react-native";
// Global Styles
import { globalStyles } from "../shared/globalStyle";

export default function Home({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });

  // Access bottom sheet using sheetRef.current;
  const bottomSheetRef = useRef(null);

  // Some styles for Dark Screen.
  const [darkScreen, setDarkScreen] = useState({ width: 0, height: 0 });

  // Get Categories From API
  const [latestCourses, setLatestCourses] = useState([]);
  const [popularCorurses, setPopularCourses] = useState([]);
  const fetchDatas = async () => {
    try {
      const response = await fetch('http://192.168.199.22:5000/LatestCourses');
      const courses = await response.json();
      setLatestCourses(courses);
      const response1 = await fetch('http://192.168.199.22:5000/PopularCourses');
      const courses1 = await response1.json();
      setPopularCourses(courses1);
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchDatas();
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
      categoryIconColor: "#00a625",
      categoryBgColor: "#abffbe",
    },
    {
      categoryId: 3,
      categoryTitle: "Sports",
      categoryIcon: "volleyball",
      categoryIconColor: "#a3003c",
      categoryBgColor: "#ff87b3",
    },
    {
      categoryId: 4,
      categoryTitle: "Science",
      categoryIcon: "atom-variant",
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
  };
  if (loaded) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <Header title="Home" height={60} />

        {/* Content */}
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.appBackground}>
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
                dotesColor="#A8DADC"
              />
            </View>

            <View style={styles.popularCoursesContainer}>
              <Text style={styles.popularCoursesTitle}>Popular Courses</Text>

              {/* A carousel for showing the popular courses. */}
              <CoursesCarousel
                courses={popularCorurses}
                navigation={navigation}
                dotesColor="#A8DADC"
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
          renderHeader={() => <BottomSheetHeader category={selectedCategory} />}
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
  bgBlue: {
    backgroundColor: "#14213D",
  },
  categoriesContainer: {
    flexDirection: "row",
  },
  latestCoursesTitle: {
    fontFamily: "rubik-regular",
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 10,
    color: "#A8DADC",
  },
  latestCoursesContainer: {
    paddingTop: 20,
  },
  popularCoursesTitle: {
    fontFamily: "rubik-regular",
    fontSize: 24,
    textAlign: "center",
    color: "#A8DADC",
    paddingBottom: 10,
  },
  popularCoursesContainer: {
    backgroundColor: "#141C27",
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
});
