import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from "../../shared/globalStyle";
import Header from '../../shared/header';
import { Formik } from "formik";
import * as yup from 'yup';

export default function ForgetPassword_Code({ navigation }) {
    // * The function for going to forget password, reset password
    const passwordPress = () => {
        navigation.navigate('Password')
    }

    const ForgetSchema = yup.object({
        code: yup.string()
            .required()
            .min(4)
    })

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.container}
        >
            <View>

                <Header title='Forget Password' backButton={true} backAction={() => navigation.goBack()}  height={60} />
                <Formik
                    initialValues={{ code: '' }}
                    validationSchema={ForgetSchema}
                    onSubmit={(values, actions) => {
                        passwordPress(values);
                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        <View style={styles.container}>
                            <Text style={globalStyles.normalText}>Enter the code we sent to your email</Text>
                            {/* Code Input*/}
                            <View style={styles.textInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Code'
                                    onChangeText={props.handleChange('code')}
                                    value={props.values.code}
                                    onBlur={props.handleBlur('code')}
                                />
                            </View>

                            <Text style={globalStyles.errorText}>{props.touched.code && props.errors.code}</Text>

                            {/* Continue Button */}
                            <TouchableOpacity style={styles.continueButton} onPress={props.handleSubmit}>
                                <Text style={styles.continueText}>Continue</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#FCA311',
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
    // Enter the code
    normalText: {
        flexDirection: 'row',
        fontFamily: 'rubik-light',
        paddingTop: 20,
    },
});