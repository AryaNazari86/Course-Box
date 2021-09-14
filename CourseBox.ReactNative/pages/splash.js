import React from 'react';
import { InteractionManager, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { setStatusBarStyle } from 'expo-status-bar';

export default function Splash({ navigation }) {
    setStatusBarStyle('light');
    InteractionManager.runAfterInteractions(() => {
        setTimeout(function () {
            navigation.push('SignUp');
        }, 5000);
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Course Box</Text>
            <LottieView
                autoPlay={true}
                style={styles.loader}
                loop={true}
                source={require('../assets/Animations/loader.json')}
            />
            <Text style={styles.poweredBy}>Powered By Code Rangers</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14213D',
    },
    title: {
        fontFamily: 'comfortaa-bold',
        fontSize: 32,
        color: '#fff',
    },
    loader: {
        width: 200,
        height: 200,
    },
    poweredBy: {
        position: 'absolute',
        bottom: 5,
        color: '#fff',
        fontFamily: 'comfortaa-light',
    }
});