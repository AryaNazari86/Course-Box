import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Subject( {item} ) {
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