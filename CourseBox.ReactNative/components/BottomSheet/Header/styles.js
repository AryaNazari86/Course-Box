import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    
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
});

export default styles;