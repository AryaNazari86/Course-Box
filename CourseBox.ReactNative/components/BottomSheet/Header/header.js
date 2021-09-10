import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );
}