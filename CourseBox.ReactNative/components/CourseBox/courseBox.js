import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
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
    <TouchableOpacity>
      <View style={styles.coursesBox}>
        <Image source={item.image} style={styles.courseImage}></Image>
        <View style={styles.coursesBox}>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate("CoursePreview", { item, navigation })}>
            <MaterialCommunityIcons name="arrow-right" size={75} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  courseImage: {
    width: 250,
    height: 100,
  },
  coursesBox: {
    borderRadius: 50,
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
    width: 225,
    height: 300,
  },
  courseTitle: {
    color: 'white',
    fontFamily: 'rubik-regular',
    fontSize: 40,
    alignSelf: 'center',
  },
  courseButton: {
    marginTop: 50,
    width: 75,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 50,
  }
});
