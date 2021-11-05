import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    displayContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingBottom: 5,
    },
    toolbar: {
        backgroundColor: '#7B68EE',
        height: 48,
        color: '#7B68EE',
        fontWeight: 'bold',
        fontSize: 27,
        paddingLeft: 15,
        paddingTop: 3,
    },
    leftColumn: {
        flex: 2,
    },
    rightColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#7B68EE',
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    producer: {
        color: '#7B68EE',
        fontSize: 20,
        marginLeft: 25,
        marginTop: 4,
    },
    year: {
        color: '#7B68EE',
        fontSize: 16,
        fontStyle: 'italic',
        marginLeft: 25,
        marginTop: 5,
    },
    noSeasons: {
        color: '#7B68EE',
        fontSize: 16,
        fontStyle: 'italic',
        marginLeft: 25,
        marginTop: 5,
    },
    hidden: {
        fontSize: 0,
    },
    notSeen: {
        color: '#7B68EE',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 25,
        marginTop: 4,
    },
    rating: {
        color: '#7B68EE',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 25,
        marginTop: 4,
    },
    container: {
        flex: 1,
    },
    valueField: {
        color: '#7B68EE',
        flexDirection: 'row',
    },
    inputContainer: {
        color: '#7B68EE',
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
    },
    textField: {
        color: '#7B68EE',
        fontSize: 24,
    },
    fab: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: '#7B68EE',
        borderRadius: 100,
    },
});

export default styles;