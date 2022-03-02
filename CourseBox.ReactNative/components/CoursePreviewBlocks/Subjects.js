import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, TextInput, Keyboard } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import Lesson from './Lesson.js';
import { globalStyles } from '../../shared/globalStyle.js';
import { theme } from '../../Themes/theme';
import { GetLessonsBySubjectId } from '../../Services/courseService.js';
export default function Subject({ item, navigation, changeIconClicked }) {
  const [editable, setEditable] = useState(false);
  const [editIcon, setEditIcon] = useState('edit-2');
  const editSubject = () => {
    if (editable) {
      setEditable(false);
      setEditIcon("edit-2");
    }
    else {
      setEditable(true);
      setEditIcon("check");
    }
  };
  const [lessons, setLessons] = useState([]);
  const [lessonsFetched, setLessonsFetched] = useState(false);
  const fetchContent = async () => {
    GetLessonsBySubjectId(item.id).then(async (result) => {
      if (result.successful) {
        result.data.then((data) => setLessons(data));
      }
    });
  };
  if (!lessonsFetched) {
    fetchContent();
    setLessonsFetched(true);
  }
  return (
    <View style={styles.subject}>
      <TouchableOpacity style={styles.editIcon} onPress={editSubject}>
        <Feather
          name={editIcon}
          size={24}
          color={theme.color3} />
      </TouchableOpacity>
      {/* Subject's title */}
      <View style={styles.subjectTitle}>
        {/* Icon */}
        <View style={styles.subjectIcon}>
          <MaterialIcons name={item.icon} size={100} color={theme.color3} />
          {editable ? <TouchableOpacity style={styles.subjectEditIconButton} onPress={changeIconClicked}><Feather name="edit-2" size={35} color='white' style={styles.subjectEditIcon} /></TouchableOpacity> : null}
        </View>
        {/* Text */}
        <TextInput editable={editable} style={{ borderBottomColor: editable ? '#A8DADC' : 'transparent', ...styles.subjectTitleText }}>{item.title}</TextInput>
      </View>
      <View style={styles.subjectQls}>
        {lessons.map(
          (item, index) => {
            {/* Each lesson of the subject  */ }
            return (
              <Lesson item={item} navigation={navigation} key={index} />
            )
          }
        )}
      </View>

      {/* Text */}
      <TextInput
        editable={editable}
        style={{
          borderBottomColor: editable ? "#A8DADC" : "transparent",
          ...styles.subjectTitleText,
        }}
      >
        {item.title}
      </TextInput>

      <View style={styles.subjectQls}>
        {item.content.map((item, index) => {
          {
            /* Each lesson of the subject  */
          }
          return <Lesson item={item} navigation={navigation} key={index} />;
        })}
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  subject: {
    marginVertical: 15,
    marginHorizontal: 30,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: theme.color3,
    paddingBottom: 10,
  },
  subjectIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  subjectEditIconButton: {
    position: "absolute",
  },
  subjectEditIcon: {
    opacity: 0.6,
  },
  subjectTitle: {
    alignSelf: "center",
  },
  subjectTitleText: {
    alignSelf: "center",
    fontSize: 25,
    color: theme.color3,
    fontWeight: "100",
    fontFamily: "comfortaa-bold",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomWidth: 2,
  },
  subjectQls: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ql: {
    marginHorizontal: 5,
    marginTop: 10,
    height: 100,
    width: 100,
    borderColor: theme.color2,
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
    borderColor: theme.color3,
    overflow: "hidden",
  },
  editIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});
