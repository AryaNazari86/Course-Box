import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CategoryBox({ category, onPress }) {
  return (
    // Category Box
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Icon Container */}
      <View
        style={[
          { backgroundColor: category.categoryBgColor },
          styles.iconContainer,
        ]}
      >
        <MaterialCommunityIcons
          name={category.categoryIcon}
          size={24}
          color={category.categoryIconColor}
        />
      </View>
      {/* Text Container */}
      <View>
        <Text style={styles.categoryTitle}>{category.categoryTitle}</Text>
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
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
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
  },
});
