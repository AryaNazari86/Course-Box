import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Chip, TouchableRipple } from "react-native-paper";
import {dark} from '../../theme/theme.js';
import { LinearGradient } from 'expo-linear-gradient';
import CategoryIcon from './courseBoxIcon.js';
export default function CourseBox({ navigation, item }) {
  // If user likes this course. (Get this from api).
  const [isLiked, setIsLiked] = useState(false);

  const likeAnimation = useRef(null);

  const [likeOpacity, setLikeOpacity] = useState(0.8);

  return (
    <View>
      
      <View style={styles.coursesBox}>
          <CategoryIcon style={styles.courseImage} category={item.category}/>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseDescription}>{item.description}</Text>
          
          <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate("CoursePreview", { datas: [item, navigation] })}>
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
    overflow: 'visible',
  },
  coursesBox: {
    marginTop: 50,
    borderRadius: 50,
    backgroundColor: dark.color3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 20,
    alignItems: "center",
    width: 230,
    height: 330,
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
  },
});
