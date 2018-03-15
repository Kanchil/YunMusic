import {
    StyleSheet
} from 'react-native';

import Util from '../../utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1
    },
    playArea: {
        width: Util.screen.width,
        flex: 1,
        height: 80
    },
    tabArea: {
        width: Util.screen.width,
        flexDirection: 'row',
        height: Util.screen.hight - 25,
        backgroundColor: '#4B3E4D'
    }
});