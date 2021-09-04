import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    tabBar: {
        height: 40,
        elevation: 5,
        shadowColor: '#E5E5E5',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
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