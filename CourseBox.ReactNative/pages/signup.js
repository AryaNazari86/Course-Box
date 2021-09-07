import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import Header from '../shared/header';
import { MaterialIcons } from '@expo/vector-icons';
import CourseBox from "../components/courseBox";

export default function SignUp() {
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <View>
                <Header title='Sign Up' />


                <View style={styles.container}>

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
    }
});