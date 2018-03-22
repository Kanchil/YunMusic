import {StyleSheet, Dimensions} from 'react-native';

let {width} = Dimensions.get('window');
const window = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    header: {
        marginTop: 17,
        marginBottom: 17,
        width: window.width
    },
    headerClose: {
        position: 'absolute',
        top: 10,
        left: 0,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    downloadButton: {
        position: 'absolute',
        top: 10,
        left: width - 40,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20
    },
    headerText: {
        color: "#FFF",
        fontSize: 18,
        textAlign: 'center'
    },
    songImage: {
        marginBottom: 20,
        width: width - 30,
        height: 300
    },
    songTitle: {
        color: "white",
        fontFamily: "Helvetica Neue",
        marginBottom: 10,
        marginTop: 13,
        fontSize: 19
    },
    albumTitle: {
        color: "#BBB",
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        marginBottom: 20
    },
    controls: {
        flexDirection: 'row',
        marginTop: 30
    },
    back: {
        marginTop: 22,
        marginLeft: 45
    },
    play: {
        marginLeft: 50,
        marginRight: 50
    },
    forward: {
        marginTop: 22,
        marginRight: 45
    },
    shuffle: {
        marginTop: 26
    },
    volume: {
        marginTop: 26
    },
    sliderContainer: {
        width: width - 40
    },
    timeInfo: {
        flexDirection: 'row'
    },
    time: {
        color: '#FFF',
        flex: 1,
        fontSize: 10
    },
    timeRight: {
        color: '#FFF',
        textAlign: 'right',
        flex: 1,
        fontSize: 10
    },
    slider: {
        height: 20
    },
    sliderTrack: {
        height: 2,
        backgroundColor: '#333'
    },
    sliderThumb: {
        width: 10,
        height: 10,
        backgroundColor: '#fff',
        borderRadius: 10 / 2
    },
    songContainer: {
        width,
        height: 60,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f1f0f0"
    },
    songView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    songTitleImage: {
        height: 50,
        width: 50,
        marginLeft: 10
    },
    songTitleContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    songArtistText: {
        fontSize: 16,
        color: "#333"
    },
    songTitleText: {
        fontSize: 12,
        color: "#c8c3c3"
    },
    noPaddingHorizontal: {
        paddingHorizontal: 0
    },
    downloadButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});