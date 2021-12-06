import React, {useState} from 'react';
import { View, Modal, Text, Pressable, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image, Button, TouchableOpacityBase } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../shared/globalStyle';
import LessonBlock from '../components/LessonBlock';
import { Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import {theme} from '../Themes/theme';

export default function LessonPreview() {
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



    return (
        <View style={{ ...globalStyles.appBackground, flex: 1 }}>
            <Header
                title={'salam'}
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

            <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
                { icon: 'plus', onPress: () => console.log('Pressed add') },
                {
                icon: 'text',
                label: 'Text',
                onPress: () => setTextVisible(true),
                },
                {
                icon: 'head',
                label: 'Header',
                onPress: () => setHeaderVisible(true),
                },
                {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
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
  