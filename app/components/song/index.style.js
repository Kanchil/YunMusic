import {StyleSheet} from 'react-native';

import Util from '../../utils/';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spContainer: {
        width: Util.screen.width - 50
    },
    songItem: {
        width: Util.screen.width,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    songRight: {
        flex: 1,
        height: 60,
        borderBottomWidth: Util.pixel,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    songIcon: {
        width: 40,
        alignItems: 'center',
        textAlign: 'center'
    },
    songOrder: {
        width: 40,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 14,
        color: '#999'
    },
    optionIcon: {
        width: 40,
        alignItems: 'center',
        textAlign: 'center'
    },
    songInfo: {
        flex: 1
    },
    songTitle: {
        color: '#333',
        fontSize: 14
    },
    songAuthor: {
        color: '#999',
        fontSize: 10
    }
});