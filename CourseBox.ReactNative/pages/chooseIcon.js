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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

});
