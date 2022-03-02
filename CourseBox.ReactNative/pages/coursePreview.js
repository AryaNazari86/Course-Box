import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../shared/header";
import { FAB } from "react-native-paper";
import Subject from "../components/CoursePreviewBlocks/Subjects.js";
import { theme } from "../Themes/theme";
import CourseCreation from "./courseCreation";
import ChooseIcon from "./chooseIcon";
import IconPicker from "react-native-icon-picker";
import { GetSubjects, participate } from "../Services/courseService";

import LottieView from "lottie-react-native";
import { globalStyles } from "../shared/globalStyle";
import { DeleteCourse } from "../Services/courseService";
import { fetchData } from "./home";
import { AddLessonBlock } from "../Services/courseService";
import SubjectCreation from "./subjectCreation";

export default function CoursePreview(props) {
  const course = props.route.params.datas[0];
  const [content, setContent] = useState([]);

  const [contentFetched, setContentFetched] = useState(false);
  const fetchContent = async () => {
    GetSubjects(course.id).then(async (result) => {
      if (result.successful) {
        result.data.then((data) => setContent(data));
      }
    });
    console.log(content);
  };
  if (!contentFetched) {
    fetchContent();
    setContentFetched(true);
  }

  const [participantFetched, setParticipantFetched] = useState(false);
  const fetchParticipate = async () => {
    participate(course.id).then(async (result) => {
      if (result.successful) {
        
      }
    });
  };
  if(!participantFetched){
    fetchParticipate();
    setParticipantFetched(true);
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  const navigation = props.route.params.datas[1];

  if (contentFetched) {
    return (
      <View style={{ backgroundColor: theme.color1, flex: 1 }}>
        <Header
          title={course.title}
          backButton={true}
          backAction={() => props.navigation.goBack()}
          height={60}
          buttons={[
            {
              icon: "plus",
              onPress: () => {
                // AddLessonBlock({
                //   title: "New Subject",
                //   icon: "book",
                //   content: [],
                // });
                setSubjectModalVisible(!subjectModalVisible);
              },
            },
            {
              icon: "trash-can-outline",
              onPress: async () => {
                DeleteCourse(course.id).then(res => {
                  if (res.successful) {
                    props.navigation.goBack();
                  }
                });
              },
            },
          ]}
        />

        {/* Create subject modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={subjectModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setSubjectModalVisible(!subjectModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <SubjectCreation
                closeFunc={() => setSubjectModalVisible(!subjectModalVisible)}
              />
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <IconPicker
                iconDetails={[
                  { family: "AntDesign", color: "blue", icons: ["wallet"] },
                  { family: "Entypo", icons: ["wallet"] },
                  { family: "FontAwesome", icons: ["google-wallet"] },
                  { family: "FontAwesome5", icons: ["wallet"] },
                  { family: "Fontisto", icons: ["wallet"] },
                  {
                    family: "MaterialCommunityIcons",
                    icons: ["wallet-membership"],
                  },
                  { family: "MaterialIcons", icons: ["wallet-travel"] },
                ]}
                onSelect={(icon) => console.log(icon)}
                content={<MaterialIcons name="category" size={32} />}
              /> */}
            </View>
          </View>
        </Modal>
        <ImageBackground
          source={require("../assets/Images/Backgrounds/wp2003036.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <ScrollView>
            {content == undefined ? (
              content.map((item, index) => {
                return (
                  <Subject
                    item={item}
                    navigation={navigation}
                    key={index}
                    changeIconClicked={() => setModalVisible(true)}
                  />
                );
              })
            ) : (
              <Text
                style={{
                  ...globalStyles.normalText,
                  ...globalStyles.TitleText,
                  textAlign: "center",
                }}
              >
                There is no subject
              </Text>
            )}
            <Text
              style={{
                alignSelf: "center",
                color: theme.color3,
                fontFamily: "comfortaa-light",
              }}
            >
              Created by {course.author}
            </Text>
          </ScrollView>

          <FAB
            color={theme.color3}
            icon="information"
            style={styles.infoButton}
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
  },
  subject: {
    marginVertical: 15,
    marginHorizontal: 30,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: theme.color2,
    paddingBottom: 10,
  },
  subjectIcon: {
    alignSelf: "center",
  },
  subjectTitle: {
    alignSelf: "center",
    borderColor: theme.color2,
  },
  subjectTitleText: {
    alignSelf: "center",
    fontSize: 25,
    fontFamily: "rubik-bold",
    color: theme.color3,
    fontFamily: "comfortaa-bold",
  },
  subjectQls: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ql: {
    marginHorizontal: 5,
    marginTop: 10,
    height: 100,
    width: 100,
    borderColor: theme.color3,
    alignItems: "center",
  },
  qlTitleText: {
    marginBottom: 10,
    alignSelf: "center",
    fontFamily: "comfortaa-bold",
    color: theme.color3,
  },
  qlIconIn: {
    padding: 8,
    borderRadius: 33,
    overflow: "hidden",
  },
  qlIconOut: {
    width: 85,
    borderWidth: 4,
    padding: 5,
    borderRadius: 40,
    borderColor: theme.color2,
    overflow: "hidden",
  },
  infoButton: {
    left: 300,
    bottom: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: theme.color2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
