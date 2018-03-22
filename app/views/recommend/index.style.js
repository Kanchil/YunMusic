import {
    StyleSheet
} from 'react-native';

import Util from '../../utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Util.screen.width,
        marginBottom: 5
    },
    conTop: {
        width: Util.screen.width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    conTitle: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10
    },
    conMore: {
        fontSize: 13,
        color: '#999',
        marginRight: 10
    },
    conContainer: {
        width: Util.screen.width,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    conItem: {
        width: (Util.screen.width) / 3,
        alignItems: 'center',
        marginBottom: 15
    },
    conImg: {
        width: 100,
        height: 100,
    },
    conSong: {
        width: (Util.screen.width) / 3,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
        color: '#333',
        fontSize: 13
    }
});