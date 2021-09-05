import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    header: {
        backgroundColor: '#fca311',
        height: 45,
        elevation: 0,
    },
    headerTitle: {
        color: '#14213D',
        textAlign: 'center',
        fontFamily: 'roboto-bold'
    },
    headerSubtitle: {
        color: '#14213D',
        textAlign: 'center',
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
        color: 'blue',
    },
    TitleText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});