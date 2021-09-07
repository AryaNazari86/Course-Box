import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

import { TouchableOpacity, Text } from 'react-native'

const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#211f30', text = '', ...props }) => (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <MaterialIcons
            size={size}
            color={color}
            name={selected ? 'check-box' : 'check-box-outline-blank'}
        />

        <Text style={textStyle}> {text} </Text>
    </TouchableOpacity>
)

export default CheckBox