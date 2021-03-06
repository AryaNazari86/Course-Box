import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import API_ADDRESS from "../../../Services/userService";
import { theme } from "../../../Themes/theme";

export default function BottomSheetHeader({ category }) {
  let CustomCategoryImage = "";
  if (category.category_image == "Math.gif") {
    CustomCategoryImage = "NewMath.gif";
  } else {
    CustomCategoryImage = category.category_image;
  }

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>

      <View style={[{ backgroundColor: theme.color2 }, styles.panel]}>
        <View style={styles.panelTop}>
          <Image
            source={{
              uri:
                "http://" +
                API_ADDRESS +
                "/static/category_image/" +
                CustomCategoryImage,
            }}
            style={{ width: 100, height: 100 }}
          ></Image>
          <Text style={[{ color: "#fff" }, styles.panelTitle]}>
            {category.title}
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
    flex: 1,
    flexDirection: "row",
  },
  panelTitle: {
    fontFamily: "rubik-regular",
    fontSize: 27,
    height: 40,
  },
});
