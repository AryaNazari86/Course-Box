import { Image } from 'react-native';
import React from 'react';
export default function CategoryIcon({category, style}) {
    if (category == 'Sports') {
        return (
            <Image
                source={require('../../assets/3DIcons/Math_3DIcon.png')}
                style={style}
            />
        );
    }
    else if (category == 'Maths') {
        return (
            <Image
                source={require('../../assets/3DIcons/Math_3DIcon.png')}
                style={style}
            />
        );
    }
    else if (category == 'Programming') {
        return (
            <Image
                source={require('../../assets/3DIcons/Code_3DIcon.png')}
                style={style}
            />
        );
    }
    else if (category == 'Art') {
        return (
            <Image
                source={require('../../assets/3DIcons/Paint_3DIcon.png')}
                style={style}
            />
        );
    }
    else if (category == 'Science') {
        return (
            <Image
                source={require('../../assets/3DIcons/Science_3DIcon.png')}
                style={style}
            />
        );
    }
}