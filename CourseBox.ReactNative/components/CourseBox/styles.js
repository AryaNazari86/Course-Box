import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    courseImage: {
        width: 250,
        height: 100,
    },
    coursesBox: {
        borderRadius: 6,
        overflow: 'hidden',
        elevation: 3,
        backgroundColor: '#161D28',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        alignItems: 'center',
        width: 250,
        borderWidth: 2,
        borderColor: '#3D4751',
    },
    courseBoxContent: {
        margin: 5,
    },
    courseTitle: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        flex: 1,
        color: 'white',
    },
    courseAuthor: {
        alignSelf: 'flex-start',
        flex: 1,
        fontStyle: 'italic',
        color: 'white',
    },
    courseNumData: {
        alignSelf: 'flex-end',
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
})

export default styles