import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import Header from '../shared/header';
import { MaterialIcons } from '@expo/vector-icons';
import CourseBox from "../components/courseBox";
import CheckBox from "../components/Checkbox/checkbox";

export default function SignUp() {
    // ! Don't enable yet
    // <Header title='Sign Up' />

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.container}
        >
            <View>
                {/* Header */}

                {/* Way 1: */}
                {/* <Image source={require("../assets/Images/Default_Profile_Img.png")} style={styles.profileAccountImage} /> */}

                {/* Way 2: */}
                {/* <Header /> */}

                {/* Way 3 */}
                <Text style={styles.headerTitle}>Sign Up</Text>

                <View style={styles.container}>
                    {/* Username */}
                    <View style={styles.textInputView}>
                        {/* <MaterialIcons name="account-circle" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                        />
                    </View>

                    {/* Name */}
                    <View style={styles.textInputView}>
                        {/* <MaterialIcons name="account-circle" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                        <TextInput
                            style={styles.input}
                            placeholder='Name'

                        />
                    </View>

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
                        {/* <MaterialIcons name="vpn-key" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                        />
                    </View>

                    {/* Accept the privacy policy */}
                    <Text style={{ marginTop: 10, opacity: 0, }}>Code Rangers®</Text>
                    <View style={styles.acceptTos}>
                        <Text style={styles.acceptTos}>By signing up you accept the </Text>
                        <TouchableOpacity>
                            <Text style={globalStyles.highlitedText}>Terms of service </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.acceptTos}>
                        <Text style={styles.acceptTos}>and </Text>
                        <TouchableOpacity>
                            <Text style={globalStyles.highlitedText}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Sign Up Button */}
                    <Text style={{ marginTop: 20, opacity: 0, }}>Code Rangers®</Text>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={styles.signInContainer}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text style={globalStyles.highlitedText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

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
        width: 330,
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
        backgroundColor: 'white'
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
        paddingTop: 140,
    },
});