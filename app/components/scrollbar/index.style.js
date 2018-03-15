import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 54,
        alignItems: 'center'
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 2
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    menu: {
        marginLeft: 10,
    },
    search: {
        marginRight: 10
    }
});