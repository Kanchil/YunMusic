import {StyleSheet} from 'react-native';

import {width} from '../../utils'

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 5
    },
    searchInput: {
        height: 20,
        width: width - 150,
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    }
});