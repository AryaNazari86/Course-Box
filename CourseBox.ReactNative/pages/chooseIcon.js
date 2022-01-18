import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  InteractionManager,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";

import { theme } from "../Themes/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChooseIcon({ navigation, closeFunc }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });



  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={globalStyles.container}
    >
      <View>
        {/* Header */}
        <Header
          title="Choose Icon"
          height={40}
          backButton={true}
          backAction={closeFunc}
          backgroundColor={theme.color1}
        />
        <ScrollView>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="abjad-arabic" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="abjad-hebrew" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="abugida-devanagari" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="abugida-thai" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="access-point" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="access-point-network" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="access-point-network-off" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-alert" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-alert-outline" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-arrow-left" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-arrow-left-outline" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-arrow-right" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-arrow-right-outline" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-box" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-box-multiple" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="account-cancel" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconsList}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons name="ab-testing" size={40} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  IconsList: {
    flexDirection: 'row',
  },
  IconBox: {
    width: 100,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
