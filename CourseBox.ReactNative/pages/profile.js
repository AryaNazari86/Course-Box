import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  InteractionManager,
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";

import CoursesCarousel from "../components/Carousel/coursesCarousel";
import courses from "../data/courses";
// Lottie Library
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);
  const [profilePageValues, setProfilePageValues] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    const getProfileData = async () => {
      let result;
      await AsyncStorage.getItem("userDetails").then((data) => {
        result = JSON.parse(data);
      });
      return result;
    };
    getProfileData()
      .then((result) => setProfilePageValues(result))
      .finally(() => {
        setLoaded(true);
      });
  });

  // * The list of user's made courses
  const [madeCourses, setMadeCourses] = useState([
    {
      title: "Hacking",
      category: "Programming",
      author: "@Ilia",
      participants: "10",
      likes: "10",
      description: "something ...",
      image: require(`../assets/Images/hacking_course.jpg`),
      key: "2",
    },
    {
      title: "Javascript Beginner Course",
      category: "Programming",
      author: "@Ilia",
      participants: "10",
      likes: "10",
      description: "something ...",
      image: require(`../assets/Images/Javascript_Course.png`),
      key: "3",
    },
    {
      title: "HTML Beginner Course",
      category: "Programming",
      author: "@Ilia",
      participants: "10",
      likes: "10",
      description: "something ...",
      image: require(`../assets/Images/HTML_Course.jpeg`),
      key: "4",
    },
    {
      title: "CSS Beginner Course",
      category: "Programming",
      author: "@Ilia",
      participants: "10",
      likes: "10",
      description: "something ...",
      image: require(`../assets/Images/CSS_Course.png`),
      key: "5",
    },
    ,
  ]);

  // * The list of user's participated courses

  const [participatedCourses, setParticipatedCourses] = useState([
    {
      title: "Dribbling",
      category: "Sports",
      author: "@Arya",
      participants: "100",
      likes: "99",
      description: "something ...",
      image: require(`../assets/Images/messi.jpeg`),
      key: "1",
    },
    {
      title: "PyQT5 Course",
      category: "Programming",
      author: "@Arya",
      participants: "10",
      likes: "10",
      description: "something ...",
      image: require(`../assets/Images/PyQT5_Course.jpeg`),
      key: "6",
    },
    {
      title: "C# Course",
      category: "Programming",
      author: "@MHK",
      participants: "10",
      likes: "10",
      description: "something ...",
      image: require(`../assets/Images/c-sharp-course.jpeg`),
      key: "7",
    },
    {
      title: "Soccer for beginners",
      category: "Sports",
      author: "@MHK",
      participants: "10",
      likes: "10",
      description: "something ...",
      image: require(`../assets/Images/soccer_Course.jpeg`),
      key: "8",
    },
  ]);

  if (loaded) {
    return (
      <View>
        {/* Header */}
        <Header
          title="Profile"
          height={60}
          buttons={[
            {
              icon: "cog-outline",
              onPress: () => {
                navigation.push("Settings");
              },
            },
          ]}
        />
        <ScrollView style={globalStyles.appBackground}>
          <View style={styles.accountBox}>
            {/* Account Name And Icon Header */}
            <View style={styles.profileAccountHeader}>
              <Image
                source={{ uri: "http://127.0.0.1:5000/static/avatars/" + profilePageValues.avatar }}
                style={styles.profileAccountImage}
              ></Image>
              <Text
                style={{
                  ...styles.profileAccountName,
                  ...globalStyles.TitleText,
                }}
              >
                {profilePageValues.name}
              </Text>
            </View>

            {/* Username */}
            <View style={styles.userName}>
              <Text style={styles.userName}>@</Text>
              <Text style={styles.userName}>{profilePageValues.username}</Text>
            </View>

            {/* Account Description */}
            <View style={styles.profileDescriptionHeader}>
              <Text style={styles.profileDescriptionText}>
                {profilePageValues.bio}
              </Text>
            </View>
          </View>
          {/* Account Details */}
          <View style={styles.profileDetailHeader}>
            {/* Ammount of made courses */}
            <View>
              <Text style={styles.profileDetailText}>
                {profilePageValues.accountCoursesVal}
              </Text>
              <Text style={styles.profileDetailText}>Courses</Text>
            </View>
            {/* Ammount of followers */}
            <View style={styles.profileDetail}>
              <Text style={styles.profileDetailText}>
                {profilePageValues.accountFollowersVal}
              </Text>
              <Text style={styles.profileDetailText}>Followers</Text>
            </View>
            {/* Ammount of made participated courses */}
            <View style={styles.profileDetail}>
              <Text style={styles.profileDetailText}>
                {profilePageValues.accountParticipatedVal}
              </Text>
              <Text style={styles.profileDetailText}>Participated</Text>
            </View>
          </View>

          {/* Made Courses */}
          <View style={styles.madeCoursesHeader}>
            <Text style={styles.madeCoursesText}>Made Courses</Text>
            <CoursesCarousel
              courses={courses}
              navigation={navigation}
              dotesColor="#A8DADC"
            />
          </View>

          {/* Participated Courses */}
          <View style={styles.madeCoursesHeader}>
            <Text style={styles.madeCoursesText}>Participated Courses</Text>
            <CoursesCarousel
              courses={courses}
              navigation={navigation}
              dotesColor="#A8DADC"
            />
          </View>

          {/* Empty Spacer */}
          <Text style={globalStyles.emptySpacer}>Code Rangers®</Text>
        </ScrollView>
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
  // * Profile name and image
  profileAccountImage: {
    width: 125,
    height: 125,
    borderRadius: 100,
    marginBottom: 10,
  },
  profileAccountHeader: {
    alignItems: "center",
    alignSelf: "center",
  },
  profileAccountName: {
    fontFamily: "comfortaa-bold",
    color: "#A8DADC",
  },

  // * Username
  userName: {
    flexDirection: "row",
    alignSelf: "center",
    fontFamily: "comfortaa-regular",
    color: "#A8DADC",
  },

  // * Profile Description
  profileDescriptionHeader: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: 10,
  },
  profileDescriptionText: {
    fontSize: 13,
    color: "#A8DADC",
    fontFamily: "comfortaa-light",
  },

  // * Profile Description
  profileDetailHeader: {
    borderWidth: 3,
    borderColor: "#3D4751",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  profileDetail: {
    paddingLeft: 30,
  },
  profileDetailText: {
    textAlign: "center",
    fontSize: 17,
    color: "#A8DADC",
    fontFamily: "comfortaa-light",
  },

  // * Courses
  madeCoursesText: {
    fontSize: 20,
    paddingTop: 30,
    textAlign: "center",
    color: "#A8DADC",
  },
  madeCoursesList: {
    flex: 1,
  },
  accountBox: {
    marginHorizontal: 30,
    paddingVertical: 30,
    borderWidth: 3,
    borderColor: "#3D4751",
    borderRadius: 50,
  },
});
