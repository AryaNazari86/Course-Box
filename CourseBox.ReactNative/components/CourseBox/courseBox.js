import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Chip, TouchableRipple } from "react-native-paper";
import { theme } from "../../Themes/theme.js";
import CategoryIcon from "./courseBoxIcon.js";
import { FontAwesome } from "@expo/vector-icons";
export default function CourseBox({ navigation, item }) {
  // If user likes this course. (Get this from api).
  const [isLiked, setIsLiked] = useState(false);

  const likeAnimation = useRef(null);

  const [likeOpacity, setLikeOpacity] = useState(0.8);

  const titleArray = item.title.trim().split("");
  
  

  return (
    <View style={styles.cover}>
      <View style={styles.coursesBox}>
        <CategoryIcon style={styles.courseImage} category={item.category} />
        <Animated.Text style={styles.courseTitle}>{item.title}</Animated.Text>
        <Text style={styles.courseDescription}>{item.description}</Text>

        <TouchableOpacity
          style={styles.courseButton}
          onPress={() =>
            navigation.navigate("CoursePreview", { datas: [item, navigation] })
          }
        >
          <FontAwesome
            name="arrow-circle-right"
            size={90}
            color={theme.color2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    height: 435,
  },
  courseImage: {
    width: 180,
    height: 180,
    overflow: "visible",
    top: -50,
  },
  coursesBox: {
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 50,
    backgroundColor: theme.color3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: "center",
    width: 250,
    height: 330,
  },
  courseTitle: {
    color: theme.color2,
    fontFamily: "rubik-bold",
    height: 35,
    fontSize: 25,
    marginLeft: 10,
    alignSelf: "flex-start",
    flexWrap: "wrap",
    top: -50,
  },
  courseButton: {
    backgroundColor: theme.color3,
    width: 90,
    height: 90,
    borderRadius: 50,
    overflow: "visible",
    top: -50,
    alignItems: "center",
  },
  courseDescription: {
    color: theme.color2,
    fontFamily: "rubik-light",
    fontSize: 20,
    marginLeft: 10,
    alignSelf: "flex-start",
    top: -50,
    height: 100,
  },
});
