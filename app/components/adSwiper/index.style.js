import {
    StyleSheet
} from 'react-native';

import Util from '../../utils';

export const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 13,
        width: Util.screen.width - 40,
        height: 30,
        textAlign: 'right',
        marginBottom: 20,
        marginRight: 20,
    },
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 5,
        height: 5,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: '#4B3E4D',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    paginationStyle: {
        bottom: 5,
        left: null,
        right: 10
    },
    adImg: {
        height: 200,
        width: Util.screen.width,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});