import {StyleSheet} from 'react-native';

import Util from '../../utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Util.screen.width,
        backgroundColor: '#f5f5f5'
    },
    parallax: {
        width: Util.screen.width
    },
    hdBg: {
        width: Util.screen.width,
        height: 200,
        justifyContent: 'flex-end'
    },
    hdBottom: {
        height: 40,
        justifyContent: 'center',
        backgroundColor: 'rgba(10,10,10,0.5)'
    },
    avatarImg: {
        width: 60,
        height: 60,
        marginBottom: 5,
        marginLeft: 15
    },
    nickname: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 14
    },
    rank: {
        width: 40,
        height: 20,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: Util.pixel * 2,
        fontSize: 10,
        textAlign: 'center',
        justifyContent: 'center',
        top: -5,
        marginLeft: 15,
        color: '#fff'
    },
    top: {
        width: Util.screen.width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: Util.pixel,
        borderColor: '#ddd'
    },
    headerCon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    playAll: {
        fontSize: 16,
        color: '#333'
    },
    songsNum: {
        fontSize: 12,
        color: '#999',
        marginLeft: 5
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