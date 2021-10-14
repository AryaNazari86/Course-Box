import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header({ category }) {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>

      <View
        style={[{ backgroundColor: category.categoryBgColor }, styles.panel]}
      >
        <View style={styles.panelTop}>
          <MaterialCommunityIcons
            name={category.categoryIcon}
            size={28}
            color={category.categoryIconColor}
          />
          <Text
            style={[{ color: category.categoryIconColor }, styles.panelTitle]}
          >
            {category.categoryTitle}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },

  panel: {
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  panelTop: {
    alignItems: "center",
    justifyContent: "center",
  },
  panelTitle: {
    fontFamily: "rubik-regular",
    fontSize: 27,
    height: 35,
  },
});
