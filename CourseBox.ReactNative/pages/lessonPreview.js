import React, {useState} from 'react';
import { View, Modal, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../shared/globalStyle';
import LessonBlock from '../components/LessonBlock';
import { Video } from 'expo-av';
export default function LessonPreview() {
    var lessonContent = [
        { type: 'title', content: 'header', key: '1' },
        { type: 'text', content: 'This is a test content', key: '2' },
        { type: 'image', content: require('../assets/Icons/user.png'), key: '3' },
        { type: 'text', content: 'test content', key: '4' },
        { type: 'video', content: require('../assets/Videos/ex.mp4'), key: '5' },
        { type: 'code', content: ['print()'] }
    ]
    const video = React.useRef(null);
    const [modalVisible, setModalVisible] = useState(false);



    return (
        <View style={{ ...globalStyles.appBackground, flex: 1 }}>
            <Header
                title={'salam'}
                backButton={true}
                backAction={() => props.navigation.goBack()}
                height={60}
                buttons={[
                    {
                        icon: "plus",
                        onPress: () => {
                            setModalVisible(true);
                        }
                    }
                ]} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput/>
                </View>
                </View>
            </Modal>
            <ScrollView>
                {/* mapping between every item in each lesson */}
                {lessonContent.map((item) => {
                    return (
                        <LessonBlock
                            type={item.type}
                            content={item.content}
                            key={item.key}
                        />
                    )
                })}
            </ScrollView>

            


        </View>


    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    }
})
  