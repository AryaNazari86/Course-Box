import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from "../../shared/globalStyle";
export default function ForgetPassword_Code({ navigation }) {
    const passwordPress = () => {
        navigation.navigate('Password')
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.container}
        >
            <View>
                <View style={styles.container}>
                    <Text style={styles.normalText}>Enter the code we sent to your email</Text>
                    {/* Code Input*/}
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.input}
                            placeholder='Code'
                        />
                    </View>

                    {/* Continue Button */}
                    <TouchableOpacity style={styles.continueButton} onPress={passwordPress}>
                        <Text style={styles.continueText}>Continue</Text>
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
    // Enter the code
    normalText: {
        flexDirection: 'row',
        fontFamily: 'rubik-light',
        paddingTop: 20,
    },
});