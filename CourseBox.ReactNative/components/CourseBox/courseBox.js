import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Chip, TouchableRipple } from "react-native-paper";
import {dark} from '../../theme/theme.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function CourseBox({ navigation, item }) {
  // If user likes this course. (Get this from api).
  const [isLiked, setIsLiked] = useState(false);

  const likeAnimation = useRef(null);

  const [likeOpacity, setLikeOpacity] = useState(0.8);

  return (
    <View>
      <Image source={item.image} style={styles.courseImage}></Image>
      <View style={styles.coursesBox}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#fff', 'transparent']}
        style={styles.background}
      />
      
        
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseDescription}>{item.description}</Text>
          <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate("CoursePreview", { item, navigation })}>
            <MaterialCommunityIcons color={dark.color3} name="arrow-right-circle" size={90} />
          </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  courseImage: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: 230,
    height: 140,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 190,
  },
  coursesBox: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: dark.color3,
    overflow: 'visible',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 20,
    alignItems: "center",
    width: 230,
    height: 190,
  },
  courseTitle: {
    color: dark.color1,
    fontFamily: 'rubik-bold',
    marginTop: 5,
    fontSize: 30,
    marginLeft: 10,
    alignSelf: 'flex-start'
  },
  courseButton: {
    backgroundColor: dark.color2,
    marginTop: 55,
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  courseDescription: {
    color: dark.color1,
    fontFamily: 'rubik-light',
    fontSize: 20,
    marginLeft: 10,
    alignSelf: 'flex-start'
  }
});
