import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from "../../shared/globalStyle";
import Header from '../../shared/header';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as yup from 'yup';

export default function ForgetPassword_Password() {
    // ! Don't enable yet
    // <Header title='Recover Password' />

    const [pass, setPass] = useState('');

    const changePass = (val) => {
        setPass(val);
    }

    const passwordSchema = yup.object({
        password: yup.string()
            .required()
            .min(5)
            .max(100),
        confirmPassword: yup.string()
            .required()
            .min(5)
            .max(100)
            .test('is-equal', "Passwords Don't match", (val) => {
                // TODO: Return True if they are equal
                return false;
            })
    })

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.container}
        >
            <View>
                {/* Header */}

                {/* Way 1: */}
                {/* <Header /> */}

                {/* Way 2 */}
                <Text style={styles.headerTitle}>Sign Up</Text>

                <Formik
                    initialValues={{ password: '', confirmPassword: '' }}
                    validationSchema={passwordSchema}
                    onSubmit={(values, actions) => {
                        makeUser(values);
                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        <View style={styles.container}>
                            {/* Password */}
                            <View style={styles.textInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='New Password'
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    onBlur={props.handleBlur('password')}
                                />
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>

                            {/* Confirm Password */}
                            <View style={styles.textInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Confirm New Password'
                                    onChangeText={props.handleChange('confirmPassword')}
                                    value={props.values.confirmPassword}
                                    onBlur={props.handleBlur('confirmPassword')}
                                />
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                            {/* Continue Button */}
                            <TouchableOpacity style={styles.continueButton} onPress={props.handleSubmit}>
                                <Text style={styles.continueText}>Continue</Text>
                            </TouchableOpacity>

                            <View style={styles.rememberYourPassword}>
                                <Text>Remember your password? </Text>
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
        marginTop: 5,
        height: 50,
        backgroundColor: 'white'
    },
    // The continue Button
    continueButton: {
        backgroundColor: '#41CD7D',
        width: 330,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    // The text of continue button
    continueText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'rubik-bold'
    },
    // Header Title
    // ! Delete if header component selected
    headerTitle: {
        fontSize: 35,
        paddingTop: 50,
        fontWeight: 'bold',
        fontFamily: 'rubik-bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    // Remember your password
    rememberYourPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 330,
    },
});