import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

export default function Header({ category }) {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.panelHeader}>
                    <View style={styles.panelHandle} />
                </View>
            </View>

            <View style={[{ backgroundColor: category.categoryBgColor }, styles.panel]}>
                <View style={styles.panelTop}>
                    <MaterialCommunityIcons name={category.categoryIcon} size={28} color={category.categoryIconColor} />
                    <Text style={[{ color: category.categoryIconColor }, styles.panelTitle]}>{category.categoryTitle}</Text>
                </View>
            </View>
        </View>
    );
}