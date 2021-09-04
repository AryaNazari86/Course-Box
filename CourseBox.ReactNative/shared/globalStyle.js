import { StyleSheet, Dimensions } from "react-native";
export const globalStyles = StyleSheet.create({
    headerContainer: {
        marginBottom: 40,
    },
    headerDetails: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    headerText: {
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
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '85%',
        height: 40,
        marginTop: 40,
        marginBottom: 20,
    },
    TitleText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});