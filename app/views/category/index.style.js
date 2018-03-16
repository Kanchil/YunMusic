import {
    StyleSheet
} from 'react-native';

import Util from '../../utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Util.screen.width,
        borderBottomWidth: Util.pixel,
        borderColor: '#ddd',
        height: 120,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {
        height: 90,
        width: Util.screen.width / 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        width: 60,
        height: 20,
        marginTop: 5,
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radius: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderColor: '#4B3E4D',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: Util.pixel * 4
    }
});