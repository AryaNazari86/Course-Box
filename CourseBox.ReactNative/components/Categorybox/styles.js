import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        width: 150,
        height: 50,
        margin: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 10,
    },
    iconContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    categoryTitle: {
        fontFamily: 'rubik-regular',
        marginLeft: 10,
    }
});

export default styles;