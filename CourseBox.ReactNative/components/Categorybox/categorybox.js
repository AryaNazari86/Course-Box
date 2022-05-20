import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import API_ADDRESS from "../../Services/userService";

// Theme colors
import { theme } from "../../Themes/theme";
export default function CategoryBox({ category, onPress }) {
  let CustomCategoryImage = "";
  if (category.category_image == "Math.gif") {
    CustomCategoryImage = "NewMath.gif";
  } else {
    CustomCategoryImage = category.category_image;
  }

  return (
    // Category Box
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Icon Container */}
      <View style={[{ backgroundColor: theme.color1 }, styles.iconContainer]}>
        <Image
          source={{
            uri:
              "http://" +
              API_ADDRESS +
              "/static/category_image/" +
              CustomCategoryImage,
          }}
          style={{ width: 24, height: 24 }}
        ></Image>
      </View>
      {/* Text Container */}
      <View>
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    height: 50,
    margin: 8,
    elevation: 3,
    backgroundColor: theme.color2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: theme.color3,
    borderWidth: 3,
    borderColor: "#3D4751",
    borderLeftWidth: 0,
    borderRadius: 30,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  categoryTitle: {
    fontFamily: "rubik-regular",
    marginLeft: 10,
    color: theme.color3,
  },
});
