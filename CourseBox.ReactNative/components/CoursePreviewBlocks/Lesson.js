import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../Themes/theme";

export default function Lesson({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.ql}
      onPress={() => navigation.navigate("Lesson", { datas: item.id })}
    >
      {/* lesson's icon */}
      <View style={styles.qlIconOut}>
        {/* Delete subject button */}
        <TouchableOpacity>
          <MaterialIcons
            name={"delete"}
            size={5}
            color={theme.color3}
            style={styles.qlIconOut}
            onPress={() => {
              console.log("delete lesson!");
            }}
          />
        </TouchableOpacity>

        <MaterialIcons
          name={item.icon}
          size={50}
          color={theme.color3}
          style={styles.qlIconOut}
        />
      </View>
      {/* lesson's title */}
      <Text style={styles.qlTitleText}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subjectQls: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ql: {
    marginHorizontal: 5,
    marginTop: 10,
    height: 100,
    width: 100,
    borderColor: "#14213D",
    alignItems: "center",
  },
  qlTitleText: {
    marginBottom: 10,
    alignSelf: "center",
    fontFamily: "comfortaa-bold",
    color: theme.color3,
  },
  qlIconIn: {
    padding: 8,
    borderRadius: 33,
    overflow: "hidden",
  },
  qlIconOut: {
    width: 85,
    borderWidth: 4,
    padding: 5,
    borderRadius: 40,
    borderColor: "#3D4751",
    overflow: "hidden",
    backgroundColor: theme.color1,
  },
});
