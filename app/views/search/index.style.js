import {StyleSheet} from 'react-native';

import Util from '../../utils';

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column'
    },
    searchInput: {
        height: 20,
        width: Util.screen.width - 150,
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    },
    searchInputContainer: {
        width: Util.screen.width,
        height: 50
    },
    downloadButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});