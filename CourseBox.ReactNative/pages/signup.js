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
                    <View style={styles.acceptTos}>
                        <Text style={styles.acceptTos}>By signing up you accept the </Text>
                        <Text style={styles.acceptTos}>Terms of service </Text>
                        <Text style={styles.acceptTos}>and </Text>
                        <Text style={styles.acceptTos}>Privacy Policy</Text>
                    </View>
                    {/* Sign Up Button */}
                    <Text style={{ marginTop: 20, opacity: 0, }}>Code Rangers®</Text>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>

                    <Text style={globalStyles.emptySpacer}>Code Rangers®</Text>
                </View >

            </View>
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        width: 330,
        paddingLeft: 25,
        fontSize: 20,
        fontFamily: 'rubik-light'
    },
    textInputView: {
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        height: 55,
        backgroundColor: 'white'
    },
    profileAccountImage: {
        width: 125,
        height: 125,
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 100,
    },
    signUpButton: {
        backgroundColor: '#41CD7D',
        width: 330,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'rubik-bold'
    },
    acceptTos: {
        flexDirection: 'row',
        fontSize: 12,
        paddingTop: 10,
        fontFamily: 'rubik-light'
    },
    headerTitle: {
        fontSize: 35,
        paddingTop: 50,
        fontWeight: 'bold',
        paddingLeft: 35,
        fontFamily: 'rubik-bold'
    }
});