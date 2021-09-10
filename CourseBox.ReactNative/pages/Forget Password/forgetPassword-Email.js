import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from "../../shared/globalStyle";
import Header from '../../shared/header';
import { MaterialIcons } from '@expo/vector-icons';

export default function ForgetPassword_Email() {
    // ! Don't enable yet
    // <Header title='Recover Password' />

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
                <Text style={styles.headerTitle}>Recover Password</Text>

                <View style={styles.container}>

                    {/* Email */}
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                        />
                    </View>

                    {/* Continue Button */}
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>

                    <View style={styles.rememberPassword}>
                        <Text>Remember your password? </Text>
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
    // The confirm Button
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
    // Header Title
    // ! Delete if header component selected
    headerTitle: {
        fontSize: 35,
        paddingTop: 50,
        fontWeight: 'bold',
        fontFamily: 'rubik-bold',
        alignSelf: 'center'
    },
    // Remeber Password
    rememberPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 420,
    },
});