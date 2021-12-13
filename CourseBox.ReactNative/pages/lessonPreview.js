import React, {useState, useEffect} from 'react';
import { View, Modal, Text, Platform, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image, Button, TouchableOpacityBase } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../shared/globalStyle';
import LessonBlock from '../components/LessonBlock';
import { Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import {theme} from '../Themes/theme';
import * as ImagePicker from 'expo-image-picker';

export default function LessonPreview(props) {
    const [lessonContent, setLessonContent] = useState([
        { type: 'title', content: 'header', key: '1' },
        { type: 'text', content: 'This is a test content', key: '2' },
        { type: 'image', content: require('../assets/Icons/user.png'), key: '3' },
        { type: 'text', content: 'test content', key: '4' },
        { type: 'video', content: require('../assets/Videos/ex.mp4'), key: '5' },
        { type: 'code', content: ['print()'] }
    ])

    // Visiblity Vars
    const [textVisible, setTextVisible] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(false);

    // Modal Vars
    const [text, setText] = React.useState("Some Text...");
    const [header, setHeader] = React.useState("Some Header...");

    // Button Vars
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setLessonContent([...lessonContent, {type: 'image', content: result.uri}])
        }
      };



    return (
        <View style={{ ...globalStyles.appBackground, flex: 1 }}>
            <Header
                title={'Lesson'}
                backButton={true}
                backAction={() => props.navigation.goBack()}
                height={60}
                />
            <Modal
                animationType="slide"
                transparent={true}
                visible={textVisible}
                onRequestClose={() => {
                setModalVisible(!textVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <Text style={{...globalStyles.normalText, marginRight: 40}}>Add Text</Text>
                        <TouchableOpacity style={{alignSelf: 'flex-end', bottom: 4,}}onPress={() => setTextVisible(false)}><AntDesign name="close" size={24} color={theme.color3} /></TouchableOpacity>
                    </View>
                    <TextInput
                        onChangeText={setText}
                        value={text}
                        multiline={true}
                        numberOfLines={4}
                        style={{borderWidth: 1, borderColor: theme.color3, color: theme.color3, borderRadius: 10, padding: 10, marginTop: 10,}}
                    />
                    <Button
                    title="add"
                    onPress={() => {
                        setLessonContent([...lessonContent, {type: 'text', content: 'asdj'}])
                    }}/>
                </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={headerVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!headerVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                    <Text style={{...globalStyles.normalText, marginRight: 40}}>Add Header</Text>
                        <TouchableOpacity style={{alignSelf: 'flex-end', bottom: 4,}}onPress={() => setHeaderVisible(false)}><AntDesign name="close" size={24} color={theme.color3} /></TouchableOpacity>
                    </View>
                    
                    <TextInput
                        onChangeText={setHeader}
                        value={header}
                        style={{borderWidth: 1, borderColor: theme.color3, color: theme.color3, borderRadius: 10, padding: 10, marginTop: 10,}}
                        maxLength={18}
                    />
                    <Button
                    title="add"
                    onPress={() => {
                        setLessonContent([...lessonContent, {type: 'title', content: 'asdj'}])
                    }}/>
                </View>
                </View>
            </Modal>
            
            <ScrollView>
                {/* mapping between every item in each lesson */}
                {lessonContent.map((item, index) => {
                    return (
                        <LessonBlock
                            type={item.type}
                            content={item.content}
                            key={index}
                        />
                    )
                })}
            </ScrollView>
            <Button title="Pick an image from camera roll" onPress={pickImage} />

            <FAB.Group
            open={open}
            icon={open ? 'close' : 'plus'}
            actions={[
                { icon: 'plus', onPress: () => console.log('Pressed add') },
                {
                icon: 'image',
                label: 'Image',
                onPress: () => console.log('Pressed notifications'),
                },
                {
                icon: 'text',
                label: 'Text',
                onPress: () => setTextVisible(true),
                small: false,
                },
                {
                icon: 'head',
                label: 'Header',
                onPress: pickImage(),
                small: false,
                },
            ]}
            onStateChange={onStateChange}
            />

            


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
      backgroundColor: theme.color1,
      borderRadius: 20,
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalTitle: {
        flexDirection: 'row'
    }
})
  