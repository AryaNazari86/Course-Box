import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from "../../shared/globalStyle";
import Header from '../../shared/header';

export default function ForgetPassword_Email({ navigation }) {
    // * The function for going to the forget password code page
    const codePress = () => {
        navigation.navigate('Code')
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.container}
        >
            <View>
                {/* * The header */}
                <Header title='Forget Password' backButton={true} backAction={() => navigation.goBack()} fontFamily="rubik-regular" height={60} />
                <View style={styles.container}>

                    {/* Email Input */}
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                        />
                    </View>

                    {/* Continue Button */}
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueText} onPress={codePress}>Continue</Text>
                    </TouchableOpacity>
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
    // The text of confirm button
    continueText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'rubik-bold',
    },
});