import React, { useEffect, useState } from "react";
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

import { FAB } from "react-native-paper";

export default function Profile({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);
  const [profilePageValues, setProfilePageValues] = useState({
    avatar: "default.png",
    name: "none",
    username: "none",
    bio: "No Description",
    accountCoursesVal: 0,
    accountFollowersVal: 0,
    accountParticipatedVal: 0,
    key: 1,
  });
  const [dataFetched, setDataFetched] = useState(false);

  // When app loads this function is called.
  // ! Problem here
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });
  const fetchData = async () => {
    const storedData = await AsyncStorage.getItem("userDetails");
    const storedDataParsed = JSON.parse(storedData);
    console.log(storedDataParsed);
    setProfilePageValues(storedDataParsed);
  };
  if (!dataFetched) {
    fetchData();
    setDataFetched(true);
  }
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
          profileButton={false}
        />
        <FAB color="#A8DADC" icon="information" style={styles.infoButton} />
        <ScrollView style={globalStyles.appBackground}>
          <View style={styles.accountBox}>
            {/* Account Name And Icon Header */}
            <View style={styles.profileAccountHeader}>
              <Image
                source={{
                  uri: "http://192.168.90.22:5000/static/avatars/" + profilePageValues.avatar,
                }}
                style={styles.profileAccountImage}
              ></Image>
            </View>

            <View style={styles.detailBox}>
              <Text
                style={{
                  ...styles.profileAccountName,
                  ...globalStyles.TitleText,
                }}
              >
                {profilePageValues.name}
              </Text>

              {/* Username */}
              <View style={styles.userNameTag}>
                <Text
                  style={{
                    ...globalStyles.TitleText,
                    ...globalStyles.normalText,
                    ...styles.userName,
                  }}
                >
                  @{profilePageValues.username}
                </Text>
                <Text
                  style={{
                    ...globalStyles.TitleText,
                    ...globalStyles.normalText,
                    ...styles.userName,
                  }}
                >
                </Text>
              </View>
            </View>
          </View>

          {/* Account Description */}
          <View style={styles.profileDescriptionHeader}>
            <Text
              style={{
                ...globalStyles.TitleText,
                ...globalStyles.normalText,
                ...styles.profileDescriptionText,
              }}
            >
              {profilePageValues.bio}
            </Text>
          </View>
          {/* Account Details */}
          <View style={styles.profileDetailHeader}>
            {/* Ammount of made courses */}
            <View>
              <Text
                style={{
                  ...globalStyles.TitleText,
                  ...globalStyles.normalText,
                  ...styles.profileDetailText,
                }}
              >
                {/* {profilePageValues.accountCoursesVal} */}5
              </Text>
              <Text
                style={{
                  ...globalStyles.TitleText,
                  ...globalStyles.normalText,
                  ...styles.profileDetailText,
                }}
              >
                Courses
              </Text>
            </View>
            {/* Ammount of followers */}
            <View style={styles.profileDetail}>
              <Text
                style={{
                  ...globalStyles.TitleText,
                  ...globalStyles.normalText,
                  ...styles.profileDetailText,
                }}
              >
                {/* {profilePageValues.accountFollowersVal} */}5
              </Text>
              <Text
                style={{
                  ...globalStyles.TitleText,
                  ...globalStyles.normalText,
                  ...styles.profileDetailText,
                }}
              >
                Followers
              </Text>
            </View>
            {/* Ammount of made participated courses */}
            <View style={styles.profileDetail}>
              <Text
                style={{
                  ...globalStyles.TitleText,
                  ...globalStyles.normalText,
                  ...styles.profileDetailText,
                }}
              >
                {/* {profilePageValues.accountParticipatedVal} */}5
              </Text>
              <Text
                style={{
                  ...globalStyles.TitleText,
                  ...globalStyles.normalText,
                  ...styles.profileDetailText,
                }}
              >
                Participated
              </Text>
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
    borderRadius: 200,
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
    fontSize: 17,
  },

  userNameTag: {
    flexDirection: "row",
  },

  // * Profile Description
  profileDescriptionHeader: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  profileDescriptionText: {
    fontSize: 14,
    color: "#A8DADC",
    textAlign: "center",
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 3,
    paddingBottom: 15,
  },

  // * Profile Description
  profileDetailHeader: {
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
    fontSize: 20,
  },

  // * Courses
  madeCoursesText: {
    fontSize: 20,
    paddingTop: 30,
    textAlign: "center",
    color: "#A8DADC",
    paddingBottom: 5,
  },
  madeCoursesList: {
    flex: 1,
  },
  accountBox: {
    marginHorizontal: 30,
    paddingVertical: 30,
    paddingBottom: 14,
    flexDirection: "row",
    justifyContent: "center",
  },
  detailBox: {
    flexDirection: "column",
    paddingLeft: 20,
    justifyContent: "center",
  },
  infoButton: {
    left: 300,
    bottom: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#3D4751",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
