import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Lesson( {item, navigation} ) {
    return (
            <TouchableOpacity style={styles.ql} onPress={() => navigation.navigate('Lesson')}>
                {/* lesson's icon */}
                <View style={styles.qlIconOut}>
                    <MaterialIcons name={item.icon} size={50} color='#3D4751' style={{ ...styles.qlIconIn, backgroundColor: item.color }} />
                </View>
                {/* lesson's title */}
                <Text style={styles.qlTitleText}>{item.title}</Text>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    subjectQls: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ql: {
        marginHorizontal: 5,
        marginTop: 10,
        height: 100,
        width: 100,
        borderColor: '#14213D',
        alignItems: 'center',
    },
    qlTitleText: {
        marginBottom: 10,
        alignSelf: 'center',
        fontFamily: 'comfortaa-bold',
        color: '#A8DADC',
    },
    qlIconIn: {
        padding: 8,
        borderRadius: 33,
        overflow: 'hidden',
    },
    qlIconOut: {
        width: 85,
        borderWidth: 4,
        padding: 5,
        borderRadius: 40,
        borderColor: '#3D4751',
        overflow: 'hidden',
    },
})