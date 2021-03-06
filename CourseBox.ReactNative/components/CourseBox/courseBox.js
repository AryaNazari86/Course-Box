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
import { GetCategory } from "../../Services/courseService";
import { participate } from "../../Services/courseService";
export default function CourseBox({ navigation, item }) {
  // If user likes this course. (Get this from api).
  const [isLiked, setIsLiked] = useState(false);

  const likeAnimation = useRef(null);

  const [likeOpacity, setLikeOpacity] = useState(0.8);

  const titleArray = item.title.trim().split("");

  let desc = null;
  if (item.description.length > 60) {
    desc = item.description.substring(0, 60) + "...";
  } else {
    desc = item.description;
  }

  return (
    <View style={styles.cover}>
      <View style={styles.coursesBox}>
        <CategoryIcon style={styles.courseImage} category={item.category_id} />
        <Animated.Text style={styles.courseTitle}>{item.title}</Animated.Text>
        <Text style={styles.courseDescription}>{desc}</Text>

        <TouchableOpacity
          style={{ ...styles.courseButton }}
          onPress={() => {
            navigation.navigate("CoursePreview", { datas: [item, navigation] });
            participate(item.id);
          }}
        >
          <FontAwesome
            name="arrow-circle-right"
            size={90}
            style={{ paddingLeft: 5, paddingTop: 3 }}
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
    // height: 35,
    maxWidth: 230,
    fontSize: 23,
    marginLeft: 10,
    alignSelf: "flex-start",
    flexWrap: "wrap",
    top: -50,
    textAlign: "center",
  },
  courseButton: {
    backgroundColor: theme.color3,
    width: 90,
    height: 90,
    borderRadius: 50,
    overflow: "visible",
    top: -70,
    // alignItems: "center",
    justifyContent: "center",
  },
  courseDescription: {
    color: theme.color2,
    fontFamily: "rubik-light",
    fontSize: 15,
    marginLeft: 10,
    alignSelf: "flex-start",
    top: -50,
    height: 100,
  },
});
