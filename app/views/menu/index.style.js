import {StyleSheet} from 'react-native';

import Util from '../../utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        backgroundColor: '#f0f0f0'
    },
    parallax: {
        width: 200,
        backgroundColor: '#f0f0f0'
    },
    header: {
        height: 160,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: Util.pixel,
        borderColor: '#ddd'
    },
    menuItem: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuIcon: {
        marginLeft: 10,
        marginRight: 10
    },
    menuTitle: {
        fontSize: 14,
        color: '#333'
    },
    bottom: {
        bottom: 0,
        left: 0,
        width: 200,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: Util.pixel,
        borderColor: '#ddd'
    },
    bottomItem: {
        width: 200,
        height: 25,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16
    },
    borderRight: {
        borderRightWidth: Util.pixel * 2,
        borderColor: '#ddd'
    },
    hdBg: {
        width: 200,
        height: 160,
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
    }
});