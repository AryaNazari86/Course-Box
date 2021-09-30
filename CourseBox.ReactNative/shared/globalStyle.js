import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    header: {
        elevation: 0,
        backgroundColor: '#FCA311'
    },
    headerTitle: {
        fontSize: 26,
        color: '#14213D',
        paddingBottom: 7,
    },
    headerBackAnimation: {
        width: 50,
        height: 50,
    },
    tabBar: {
        height: 70,
        backgroundColor: '#FCA311'
    },
    input: {
        marginTop: 35,
        marginBottom: 15,
        width: '85%',
        height: 50,
    },
    TitleText: {
        fontSize: 24,
    },
    emptySpacer: {
        marginTop: 75,
        opacity: 0,
    },
    highlitedText: {
        color: '#399DFF',
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginTop: 6,
        textAlign: 'center'
    },
    normalText: {
        flexDirection: 'row',
        fontFamily: 'rubik-light',
        paddingTop: 20,
    },
    loaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {
        width: 200,
        height: 200,
    },
});