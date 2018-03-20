import {StyleSheet} from 'react-native';

import Util from '../../utils/';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        height: 50,
        backgroundColor: '#4B3E4D',
        justifyContent: 'center',
        position: 'relative'
    },
    headerClose: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 50,
        width: 30,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headtitle: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#ffffff'
    },
    avatarview: {
        height: 150,
        backgroundColor: '#ECEDF1',
        justifyContent: 'center'
    },
    avatarimage: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    marginTopview: {
        height: 15,
        backgroundColor: '#F7F7F9'
    },
    inputview: {
        height: 100,
        marginLeft: 10,
        marginRight: 10
    },
    textinput: {
        flex: 1,
        fontSize: 16
    },
    dividerview: {
        flexDirection: 'row'
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ECEDF1'
    },
    bottomview: {
        backgroundColor: '#ECEDF1',
        flex: 1
    },
    buttonview: {
        backgroundColor: '#4B3E4D',
        margin: 10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logintext: {
        fontSize: 17,
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10
    },
    emptyview: {
        flex: 1
    },
    bottombtnsview: {
        flexDirection: 'row'
    },
    bottomleftbtnview: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    bottomrightbtnview: {
        flex: 1,
        height: 50,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    bottombtn: {
        fontSize: 15,
        color: '#4B3E4D'
    }
});