import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import Header from '../shared/header';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as yup from 'yup';

// * Holds important values for the use of the function
// const testFunc = () => {
//     console.log("Hello")
//   }

{/* <SignUp makeUser={testFunc} /> */ }

const ReviewSchema = yup.object({
    username: yup.string()
        .required()
        .max(10)
        .min(4),
    name: yup.string()
        .required()
        .max(10)
        .min(3),
    email: yup.string()
        .required()
        .min(5),
    password: yup.string()
        .required()
        .min(5)
        .max(100)
})

export default function SignUp({ makeUser }) {
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

                <Formik
                    initialValues={{ username: '', name: '', email: '', password: '' }}
                    validationSchema={ReviewSchema}
                    onSubmit={(values, actions) => {
                        makeUser(values);
                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        <View style={styles.container}>
                            {/* Username */}
                            <View style={styles.textInputView}>
                                {/* <MaterialIcons name="account-circle" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                                <TextInput
                                    style={styles.input}
                                    placeholder='Username'
                                    onChangeText={props.handleChange('username')}
                                    value={props.values.username}
                                    onBlur={props.handleBlur('username')}
                                />
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.username && props.errors.username}</Text>

                            {/* Name */}
                            <View style={styles.textInputView}>
                                {/* <MaterialIcons name="account-circle" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                                <TextInput
                                    style={styles.input}
                                    placeholder='Name'
                                    onChangeText={props.handleChange('name')}
                                    value={props.values.name}
                                    onBlur={props.handleBlur('name')}
                                />
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>


                            {/* Email */}
                            <View style={styles.textInputView}>
                                {/* <MaterialIcons name="email" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                                <TextInput
                                    style={styles.input}
                                    placeholder='Email'
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                    onBlur={props.handleBlur('email')}
                                />
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>

                            {/* Password */}
                            <View style={styles.textInputView}>
                                {/* <MaterialIcons name="vpn-key" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    onBlur={props.handleBlur('password')}
                                />
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>

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
                            <TouchableOpacity style={styles.signUpButton} onPress={props.handleSubmit}>
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
                    )}
                </Formik>

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
        marginTop: 10,
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