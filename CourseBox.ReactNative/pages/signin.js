import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import Header from '../shared/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as yup from 'yup';

export default function SignIn({ navigation }) {

    const loginSchema = yup.object({
        email: yup.string()
            .required()
            .min(4),
        password: yup.string()
            .required()
            .min(5)
            .max(100),
    })

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
                <Header title='Sign In' backButton={true} backAction={() => navigation.goBack()}  height={60} />
                <Formik
                    initialValues={{ code: '' }}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                        signInPress(values);
                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        <View style={styles.container}>
                            {/* Email */}
                            <View style={styles.textInputView}>
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
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    secureTextEntry={hidePass}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    onBlur={props.handleBlur('password')}
                                />
                                <TouchableOpacity onPress={hidePassFunc}>
                                    <MaterialCommunityIcons name={hidePassIcon} size={30} color="black" style={styles.hideIcon} />
                                </TouchableOpacity>
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>

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
                            <TouchableOpacity style={styles.signUpButton} onPress={props.handleSubmit}>
                                <Text style={styles.signUpText}>Sign In</Text>
                            </TouchableOpacity>

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
    // The confirm Button
    signUpButton: {
        backgroundColor: '#FCA311',
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
    // Have an cccount View
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 300,
    },
});