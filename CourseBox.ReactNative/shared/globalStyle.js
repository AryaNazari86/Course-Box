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
        fontFamily: 'rubik-light',
        fontSize: 26,
    },
    headerSubtitle: {
        color: '#14213D',
        textAlign: 'center',
        fontFamily: 'rubik-light'
    },
    tabBar: {
        backgroundColor: '#14213D',
    },
    courseImage: {
        width: 225,
        height: 100,
        borderRadius: 6,
    },
    coursesBox: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        alignItems: 'center',
        width: 250,
        flex: 1,
        padding: 15,
    },
    courseTitle: {
        marginTop: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        flex: 1,
        color: '#14213D',
    },
    courseAuthor: {
        marginTop: 0,
        alignSelf: 'flex-start',
        flex: 1,
        fontStyle: 'italic',
    },
    courseNumData: {
        alignSelf: 'flex-end',
        color: '#14213D',
    },
    courseIcons: {
        alignSelf: 'flex-end',
        marginRight: 4,
    },
    courseLines: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    courseCategory: {
        marginVertical: 5,
        alignSelf: 'flex-start',
        alignItems: 'center',
        height: 20,
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
    }
});