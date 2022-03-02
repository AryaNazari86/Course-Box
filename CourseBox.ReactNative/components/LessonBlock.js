import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../shared/header";
import { FAB } from "react-native-paper";
import { globalStyles } from "../shared/globalStyle";
import { user } from "../assets/Icons/user.png";
import { Video } from "expo-av";
export default function LessonBlock({ type, content }) {
  if (type == "text") {
    {
      /* if the item type was a simple text */
    }
    return (
      <View>
        {/* Delete lesson block button */}
        <TouchableOpacity>
          <MaterialIcons
            name={"delete"}
            size={5}
            color={theme.color3}
            style={styles.qlIconOut}
            onPress={() => {
              console.log("delete lesson block!");
            }}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{content}</Text>
      </View>
    );
  } else if (type == "image") {
    {
      /* if the item type was an image */
    }
    return (
      <View>
        {/* Delete lesson block button */}
        <TouchableOpacity>
          <MaterialIcons
            name={"delete"}
            size={5}
            color={theme.color3}
            style={styles.qlIconOut}
            onPress={() => {
              console.log("delete lesson block!");
            }}
          />
        </TouchableOpacity>
        <Image style={styles.image} source={content} />
      </View>
    );
  } else if (type == "title") {
    {
      /* if the item type was a header title */
    }
    return (
      <View style={styles.titleContainer}>
        {/* Delete lesson block button */}
        <TouchableOpacity>
          <MaterialIcons
            name={"delete"}
            size={5}
            color={theme.color3}
            style={styles.qlIconOut}
            onPress={() => {
              console.log("delete lesson block!");
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{content}</Text>
      </View>
    );
  } else if (type == "video") {
    {
      /* if the item type was a video */
    }
    return (
      <View style={styles.videoContainer}>
        {/* Delete lesson block button */}
        <TouchableOpacity>
          <MaterialIcons
            name={"delete"}
            size={5}
            color={theme.color3}
            style={styles.qlIconOut}
            onPress={() => {
              console.log("delete lesson block!");
            }}
          />
        </TouchableOpacity>
        <Video
          source={content}
          useNativeControls
          resizeMode="contain"
          isLooping
          style={styles.video}
        />
      </View>
    );
  } else if (type == "code") {
    {
      /* if the item type was a video */
    }
    return (
      <View style={styles.codeBlock}>
        {/* Delete lesson block button */}
        <TouchableOpacity>
          <MaterialIcons
            name={"delete"}
            size={5}
            color={theme.color3}
            style={styles.qlIconOut}
            onPress={() => {
              console.log("delete lesson block!");
            }}
          />
        </TouchableOpacity>
        <View style={styles.codeLangContainer}>
          <Text style={styles.codeLang}>python</Text>
        </View>
        {content.map((item, index) => {
          return (
            <View style={styles.codeLine} key={index}>
              <Text style={styles.codeLineNum}>
                {content.indexOf(item) + 1}
              </Text>
              <Text style={styles.code}>{item}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "#A8DADC",
    fontFamily: "comfortaa-bold",
    fontSize: 30,
    marginTop: 15,
    marginHorizontal: 15,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#3D4751",
    marginHorizontal: 15,
  },
  image: {
    width: "100%",
    borderRadius: 30,
  },
  text: {
    color: "#A8DADC",
    fontSize: 16,
    fontFamily: "comfortaa-light",
    marginHorizontal: 15,
    marginTop: 5,
  },
  videoContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 30,
    overflow: "hidden",
  },
  video: {
    height: "100%",
  },
  codeBlock: {
    borderWidth: 1,
    borderColor: "#A8DADC",
    borderRadius: 10,
    marginHorizontal: 15,
    paddingLeft: 10,
  },
  codeLang: {
    color: "#A8DADC",
    fontFamily: "courier-regular",
  },
  codeLangContainer: {
    borderBottomWidth: 1,
    borderColor: "#A8DADC",
  },
  code: {
    color: "#A8DADC",
    fontFamily: "courier-regular",
  },
  codeLineNum: {
    fontFamily: "courier-regular",
    color: "#A8DADC",
    marginRight: 10,
  },
  codeLine: {
    flexDirection: "row",
  },
  qlIconOut: {
    width: 85,
    borderWidth: 4,
    padding: 5,
    borderRadius: 40,
    borderColor: theme.color3,
    overflow: "hidden",
  },
});
