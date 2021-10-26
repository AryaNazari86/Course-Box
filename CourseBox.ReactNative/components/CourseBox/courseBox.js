import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Chip, TouchableRipple } from "react-native-paper";

export default function CourseBox({ navigation, item }) {
  // If user likes this course. (Get this from api).
  const [isLiked, setIsLiked] = useState(false);

  const likeAnimation = useRef(null);

  const [likeOpacity, setLikeOpacity] = useState(0.8);

  const playAnimation = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeOpacity(1);
      likeAnimation.current.play();
    } else {
      setIsLiked(false);
      setLikeOpacity(0.7);
    }
  };

  return (
    <TouchableRipple
      style={styles.coursesBox}
      onPress={() => navigation.navigate("CoursePreview", { item, navigation })}
    >
      <View>
        <Image source={item.image} style={styles.courseImage}></Image>
        <View style={styles.courseBoxContent}>
          <View style={styles.courseLines}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <MaterialCommunityIcons
              name="account-group"
              size={18}
              color="white"
              style={styles.courseIcons}
            />
            <Text style={[{ color: "white" }, styles.courseNumData]}>
              {item.participants}
            </Text>
          </View>
          <Chip style={styles.courseCategory}>{item.category}</Chip>
          <View style={styles.courseLines}>
            <Text style={styles.courseAuthor}>{item.author}</Text>
            <MaterialCommunityIcons
              name="star"
              size={18}
              color="#fca311"
              style={styles.courseIcons}
            />
            <Text style={[{ color: "#fca311" }, styles.courseNumData]}>
              {item.likes}
            </Text>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  courseImage: {
    width: 250,
    height: 100,
  },
  coursesBox: {
    borderRadius: 6,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "#161D28",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    alignItems: "center",
    width: 250,
    borderWidth: 2,
    borderColor: "#3D4751",
  },
  courseBoxContent: {
    margin: 5,
  },
  courseTitle: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    flex: 1,
    color: "white",
  },
  courseAuthor: {
    alignSelf: "flex-start",
    flex: 1,
    fontStyle: "italic",
    color: "white",
  },
  courseNumData: {
    alignSelf: "flex-end",
  },
  courseIcons: {
    alignSelf: "flex-end",
    marginRight: 4,
  },
  courseLines: {
    flexDirection: "row",
    justifyContent: "center",
  },
  courseCategory: {
    marginVertical: 5,
    alignSelf: "flex-start",
    alignItems: "center",
    height: 20,
  },
});
