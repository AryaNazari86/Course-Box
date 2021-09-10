import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    panel: {
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    panelTop: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    panelTitle: {
        fontFamily: 'rubik-regular',
        fontSize: 27,
        height: 35,
    },
    content: {
        alignItems: 'center',
    },
    list: {
        paddingBottom: '500%',
    }
});

export default styles;