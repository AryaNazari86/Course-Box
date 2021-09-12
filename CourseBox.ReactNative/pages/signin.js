import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import Header from '../shared/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CourseBox from "../components/courseBox";
import CheckBox from "../components/Checkbox/checkbox";

export default function SignIn({ navigation }) {
    // ! Don't enable yet
    // <Header title='Sign Up' />

    const signInPress = () => {
        navigation.navigate('Tab')
    }

    const forgetPress = () => {
        console.log('Hi')
        navigation.navigate('Email')
    }

    const [hidePass, setHidePass] = useState(true)
    const [hidePassIcon, setHidePassIcon] = useState('eye-off')

    const hidePassFunc = () => {
        if (hidePass) {
            // Make false
            setHidePass(false),
                setHidePassIcon('eye-off')
        } else {
            // Make true
            setHidePass(true),
                setHidePassIcon('eye')
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.container}
        >
            <View>
                <Header title='Sign In' backButton={true} backAction={() => navigation.goBack()} />
                <View style={styles.container}>
                    {/* ! Delete if username was not requires */}
                    {/* Username
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                        />
                    </View> */}

                    {/* Email */}
                    <View style={styles.textInputView}>
                        {/* <MaterialIcons name="email" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            secureTextEntry={hidePass}
                        />
                        <TouchableOpacity onPress={hidePassFunc}>
                            <MaterialCommunityIcons name={hidePassIcon} size={30} color="black" style={styles.hideIcon} />
                        </TouchableOpacity>
                    </View>

                    {/* Accept the privacy policy */}
                    <Text style={{ marginTop: 10, opacity: 0, }}>Code Rangers®</Text>
                    <View style={styles.acceptTos}>
                        <Text style={styles.acceptTos}>Did you </Text>
                        <TouchableOpacity onPress={forgetPress}>
                            <Text style={globalStyles.highlitedText}>Forget your password?</Text>
                        </TouchableOpacity>

                    </View>
                    {/* Sign Up Button */}
                    <Text style={{ marginTop: 20, opacity: 0, }}>Code Rangers®</Text>
                    <TouchableOpacity style={styles.signUpButton} onPress={signInPress}>
                        <Text style={styles.signUpText}>Sign In</Text>
                    </TouchableOpacity>

                    <Text style={globalStyles.emptySpacer}>Code Rangers®</Text>
                </View >

            </View>
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    // Container of page
    container: {
        alignItems: 'center',
    },

    // The text input
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        width: 250,
        paddingLeft: 20,
        fontSize: 18,
        fontFamily: 'rubik-regular'
    },
    // The view covering the text input
    textInputView: {
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        height: 50,
        backgroundColor: 'white',
        width: 330,
    },
    hideIcon: {
        padding: 35,
    },
    // * Kept for possible future use
    // ! Delete if design accepted
    profileAccountImage: {
        width: 125,
        height: 125,
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 100,
    },
    // The confirm Button
    signUpButton: {
        backgroundColor: '#41CD7D',
        width: 330,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // The text of confirm button
    signUpText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'rubik-bold'
    },
    // Accept Tos Text
    acceptTos: {
        flexDirection: 'row',
        fontFamily: 'rubik-light'
    },
    // Header Title
    // ! Delete if header component selected
    headerTitle: {
        fontSize: 35,
        paddingTop: 50,
        fontWeight: 'bold',
        fontFamily: 'rubik-bold',
        alignSelf: 'center'
    },
    // Have an cccount View
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 300,
    },
});