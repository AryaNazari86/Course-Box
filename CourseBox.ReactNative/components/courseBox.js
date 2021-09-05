import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Chip } from 'react-native-paper';

export default function CourseBox({ item }) {
    return (
        <TouchableOpacity style={globalStyles.coursesBox}>
            <Image source={item.image} style={globalStyles.courseImage}></Image>
            <View style={globalStyles.courseLines}>
                <Text style={globalStyles.courseTitle}>{item.title}</Text>
                <MaterialCommunityIcons name="account-group" size={16} color="#14213D" style={globalStyles.courseIcons} />
                <Text style={globalStyles.courseNumData}>{item.participants}</Text>
            </View>
            <Chip style={globalStyles.courseCategory}>{item.category}</Chip>
            <View style={globalStyles.courseLines}>
                <Text style={globalStyles.courseAuthor}>{item.author}</Text>
                <MaterialCommunityIcons name='thumb-up' size={15} color="#14213D" style={globalStyles.courseIcons} />
                <Text style={globalStyles.courseNumData}>{item.likes}</Text>
            </View>
        </TouchableOpacity>
    )
}