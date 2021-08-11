/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    Header: {
        flex: 0.4,
        flexDirection: 'row',
        borderBottomWidth: 0.7,
        borderBottomColor: '#D8D8D8',
    },
    Menu: {
        flex: 1,
        padding: 10,
    },
    Back: {
        flex: 1,
        padding: 10,
    },
    Share: {
        flex: 1,
        padding: 10,
    },
    Title: {
        flex: 9,
        padding: 5,
        paddingLeft: 85,
    },
    Text: {
        fontSize: 21,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 4,
    },
    Search: {
        flex: 0.4,
        padding: 10,
        flexDirection: 'row',
    },
    SearchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#D8D8D8',
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 12,
    },
    textSearch: {
        flex: 5,
        padding: 10,
        color: 'black',
        fontSize: 18,
    },
    Content: {
        flex: 5,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    MenuBar: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        borderTopWidth: 0.7,
        borderTopColor: '#D8D8D8',
    },
    IconMenu: {
        textAlign: 'center',
    },
    TextMenu: {
        color: 'gray',
    },
});
export default styles;
