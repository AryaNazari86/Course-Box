import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from "../../shared/globalStyle";
import Header from '../../shared/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as yup from 'yup';

export default function ForgetPassword_Password({ navigation, goToUser }) {
    // ! Don't enable yet
    // <Header title='Recover Password' />

    // * Set of yup rules for the text input
    const PasswordSchema = yup.object({
        Password: yup.string()
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

    // * The hide password state
    const [hidePass, setHidePass] = useState(true)
    // * The hide password icon state
    const [hidePassIcon, setHidePassIcon] = useState('eye-off')

    // * The function that toggles the visibility of password
    const hidePassFunc = () => {
        if (hidePass) {
            // Make false
            setHidePass(false)
            setHidePassIcon('eye-off')
        } else {
            // Make true
            setHidePass(true)
            setHidePassIcon('eye')
        }
    }

    // * The hide confirm password state
    const [hidePass2, setHidePass2] = useState(true)
    // * The hide confirm password icon state
    const [hidePassIcon2, setHidePassIcon2] = useState('eye-off')

    // * The function that toggles the visibility of confirm password
    const hidePassFunc2 = () => {
        if (hidePass2) {
            // Make false
            setHidePass2(false)
            setHidePassIcon2('eye-off')
        } else {
            // Make true
            setHidePass2(true)
            setHidePassIcon2('eye')
        }
    }

    const signInPress = () => {
        console.log('Hi')
        navigation.navigate('SignIn')
    }
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.container}
        >
            <View>

                <Header title='Forget Password' backButton={true} backAction={() => navigation.goBack()} />
                <Formik
                    initialValues={{ Password: '', confirmPassword: '' }}
                    validationSchema={PasswordSchema}
                    onSubmit={(values, actions) => {
                        goToUser(values);
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
                                    onChangeText={props.handleChange('Password')}
                                    value={props.values.Password}
                                    onBlur={props.handleBlur('Password')}
                                    secureTextEntry={hidePass}
                                />
                                <TouchableOpacity onPress={hidePassFunc}>
                                    <MaterialCommunityIcons name={hidePassIcon} size={30} color="black" style={styles.hideIcon} />
                                </TouchableOpacity>
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.Password && props.errors.Password}</Text>

                            {/* Confirm Password */}
                            <View style={styles.textInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Confirm New Password'
                                    onChangeText={props.handleChange('confirmPassword')}
                                    value={props.values.confirmPassword}
                                    onBlur={props.handleBlur('confirmPassword')}
                                    secureTextEntry={hidePass2}
                                />
                                <TouchableOpacity onPress={hidePassFunc2}>
                                    <MaterialCommunityIcons name={hidePassIcon2} size={30} color="black" style={styles.hideIcon} />
                                </TouchableOpacity>
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                            {/* Continue Button */}
                            {/* TODO: Only allow user to continue if they meet the rules */}
                            <TouchableOpacity style={styles.continueButton} onPress={props.handleSubmit, signInPress}>
                                <Text style={styles.continueText}>Continue</Text>
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
        paddingTop: 20,
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
        marginTop: 5,
        height: 50,
        backgroundColor: 'white',
        width: 330,
    },
    hideIcon: {
        padding: 35,
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
});