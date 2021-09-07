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
                <View style={styles.container}>
                    {/* Fake Profile Image */}
                    <Image source={require("../assets/Images/Default_Profile_Img.png")} style={styles.profileAccountImage} />

                    {/* Username */}
                    <View style={styles.textInputView}>
                        <MaterialIcons name="account-circle" size={44} color="black" style={{ paddingLeft: 5, }} />
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                        />
                    </View>

                    {/* Name */}
                    <View style={styles.textInputView}>
                        <MaterialIcons name="account-circle" size={44} color="black" style={{ paddingLeft: 5, }} />
                        <TextInput
                            style={styles.input}
                            placeholder='Name'
                        />
                    </View>

                    {/* Email */}
                    <View style={styles.textInputView}>
                        <MaterialIcons name="email" size={44} color="black" style={{ paddingLeft: 5, }} />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.textInputView}>
                        <MaterialIcons name="vpn-key" size={44} color="black" style={{ paddingLeft: 5, }} />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                        />
                    </View>

                    {/* Accept the privacy policy */}
                    <Text style={{ marginTop: 40, opacity: 0, }}>Code Rangers®</Text>
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
        width: 250,
    },
    textInputView: {
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    profileAccountImage: {
        width: 125,
        height: 125,
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 100,
    },
    signUpButton: {
        backgroundColor: '#2CADFF',
        width: 250,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpText: {
        fontSize: 25,
        color: 'white'
    }
});