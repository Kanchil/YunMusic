import {
    Dimensions,
    PixelRatio
} from 'react-native';

module.exports = {
    screen: {
        width: Dimensions.get('window').width,
        hight: Dimensions.get('window').height
    },
    pixel: 1 / PixelRatio.get(),

    get: function (url, successCallback, failCallback) {
        fetch(url)
            .then((response => response.json()))
            .then((responseJson) => {
                successCallback(responseJson);
            }).catch((err) => {
                failCallback(err);
            })
    }
}