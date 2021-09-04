import { StyleSheet, Dimensions } from "react-native";
export const globalStyles = StyleSheet.create({
    headerContainer: {
        marginBottom: 10,
        backgroundColor: '#E5E5E5',
    },
    headerDetails: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },
    headerText: {
        top: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#E5E5E5',
        textAlign: 'center',
        marginTop: 35,
    },
    headerSvgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width,
    },
    tabBar: {
        backgroundColor: '#14213D',
    },
    courses: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        elevation: 10,
        borderColor: 'black',
        padding: 10,
        width: 200,
        marginVertical: 20,
    },
    input: {
        marginTop: 35,
        marginBottom: 15,
        width: '85%',
        height: 50,
        color: 'red',
    },
    TitleText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});