import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  InteractionManager,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";

import CoursesCarousel from "../components/Carousel/coursesCarousel";
import courses from "../data/courses";
// Lottie Library
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FAB } from "react-native-paper";
import CourseCreation from "./courseCreation";
import API_ADDRESS from "../Services/userService";
import * as UserService from "../Services/userService";

// Theme colors
import { theme } from "../Themes/theme";
import { GetToken } from "../Services/userService";

import {
  GetMadeCourses,
  GetCoursesByParticipant,
} from "../Services/courseService";
export default function Profile({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);
  const [profilePageValues, setProfilePageValues] = useState({
    avatar: "default.png",
    name: "Loading...",
    username: "Loading...",
    bio: "Loading...",
    accountCoursesVal: 0,
    accountFollowersVal: 0,
    accountParticipatedVal: 0,
    key: 1,
  });
  const [dataFetched, setDataFetched] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [madeCourses, setMadeCourses] = useState([]);
  const [participatedCourses, setParticipatedCourses] = useState([]);

  // When app loads this function is called.
  // ! Problem here
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });

  var userDetails;

  const fetchData = async () => {
    GetToken().then(async (r) => {
      UserService.GetUserDetails(r).then(async (userDetails) => {
        if (userDetails.successful) {
          userDetails.data.then(async (data) => {
            setProfilePageValues(data);
          });
        }
      });

      GetMadeCourses(r).then(async (courseList) => {
        if (courseList.successful) {
          courseList.data.then(async (data) => {
            setMadeCourses(data);
          });
        }
      });

      GetCoursesByParticipant().then(async (courseList) => {
        if (courseList.successful) {
          courseList.data.then(async (data) => {
            setParticipatedCourses(data);
          });
        }
      });
    });
  };

  console.log(userDetails);

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
          buttons={
            [
              // {
              //   icon: "cog-outline",
              //   onPress: () => {
              //     navigation.push("Settings");
              //   },
              // },
            ]
          }
          profileButton={false}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <CourseCreation
                closeFunc={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={globalStyles.appBackground}
        >
          <ImageBackground
            source={require("../assets/Images/Backgrounds/b05ed9832a0663c2e80b846604e157d3.png")}
            resizeMode="cover"
            style={styles.image}
            blurRadius={0}
          >
            <View style={styles.accountBox}>
              {/* Account Name And Icon Header */}
              <View style={styles.profileAccountHeader}>
                <Image
                  source={{
                    uri:
                      "http://" +
                      API_ADDRESS +
                      "/static/avatars/" +
                      profilePageValues.avatar,
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
                  ></Text>
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
                  {profilePageValues.madeCoursesNum}
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

            <View style={styles.madeCoursesHeader}>
              {/* Made Courses */}
              <View style={{ minHeight: 300 }}>
                <Text
                  style={{
                    ...styles.madeCoursesText,
                    ...globalStyles.normalText,
                    ...globalStyles.TitleText,
                  }}
                >
                  Made Courses
                </Text>
                <CoursesCarousel
                  courses={madeCourses}
                  navigation={navigation}
                  dotesColor={theme.color3}
                />
              </View>

              {/* Participated Courses */}
              <View style={{ minHeight: 300 }}>
                <Text
                  style={{
                    ...styles.madeCoursesText,
                    ...globalStyles.normalText,
                    ...globalStyles.TitleText,
                  }}
                >
                  Participated Courses
                </Text>
                <CoursesCarousel
                  courses={participatedCourses}
                  navigation={navigation}
                  dotesColor={theme.color3}
                />
              </View>
            </View>
            {/* Empty Spacer */}
            <Text style={globalStyles.emptySpacer}>Code Rangers®</Text>
          </ImageBackground>
        </ScrollView>

        <FAB
          color={theme.color3}
          icon="plus"
          style={styles.infoButton}
          onPress={() => setModalVisible(!modalVisible)}
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
    color: theme.textColor2,
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
    color: theme.textColor2,
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
    paddingLeft: 20,
  },
  profileDetailText: {
    textAlign: "center",
    fontSize: 18,
  },

  // * Courses
  madeCoursesText: {
    fontSize: 20,
    paddingTop: 15,
    textAlign: "center",
    color: theme.textColor2,
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
    right: 10,
    bottom: 125,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: theme.color2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.color1,
    borderRadius: 20,
    borderColor: "#FFF",
    borderWidth: 2,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 400,
  },

  madeCoursesHeader: {
    backgroundColor: theme.color2,
    marginTop: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});
