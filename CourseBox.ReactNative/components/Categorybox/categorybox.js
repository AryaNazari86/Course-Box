import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

export default function CategoryBox({ category, onPress }){
    return (
        // Category Box
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* Icon Container */}
            <View style={[{backgroundColor: category.categoryBgColor}, styles.iconContainer]}>
                <MaterialCommunityIcons name={category.categoryIcon} size={24} color={category.categoryIconColor} />
            </View>
            {/* Text Container */}
            <View>
                <Text style={styles.categoryTitle}>{category.categoryTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}