import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slider';

import * as Utils from '../../helpers/utils';

import {styles} from './index.style';

export class PlayButton extends Component {
    render() {
        return <Icon onPress={this.props.togglePlay} style={styles.play}
                     name={this.props.playing ? "ios-pause" : "ios-play"} size={70} color="#fff"/>;
    }
}

export class ForwardButton extends Component {
    render() {
        let forwardButton = null;
        forwardButton =
            <FontAwesome onPress={this.props.goForward} style={styles.forward} name="forward" size={25} color="#fff"/>;
        return forwardButton;
    }
}

export class BackwardButton extends Component {
    render() {
        return <FontAwesome onPress={this.props.goBackward} style={styles.back} name="backward" size={25} color="#fff"/>
    }
}

export class VolumeButton extends Component {
    render() {
        return <FontAwesome onPress={this.props.toggleVolume} style={styles.volume}
                            name={this.props.muted ? "volume-off" : "volume-up"} size={18} color="#fff"/>;
    }
}

export class ShuffleButton extends Component {
    render() {
        return <FontAwesome onPress={this.props.toggleShuffle} style={styles.shuffle} name="random" size={18}
                            color={this.props.shuffle ? "#f62976" : "#fff"}/>;
    }
}

export class DownloadButton extends Component {
    render() {
        if (!this.props.download || this.props.downloading) {
            return <FontAwesome style={styles.downloadButton} name="download" size={25} color="#333"/>;
        }
        return <FontAwesome onPress={this.props.downloadMusic} style={styles.downloadButton} name="download" size={25}
                            color="#fff"/>;
    }
}

export class SongSlider extends Component {
    render() {
        return (
            <View style={styles.sliderContainer}>
                <Slider
                    onSlidingStart={this.props.onSlidingStart}
                    onSlidingComplete={this.props.onSlidingComplete}
                    onValueChange={this.props.onValueChange}
                    minimumTrackTintColor='#fff'
                    style={styles.slider}
                    trackStyle={styles.sliderTrack}
                    thumbStyle={styles.sliderThumb}
                    value={this.props.value}/>

                <View style={styles.timeInfo}>
                    <Text style={styles.time}>{Utils.formattedTime(this.props.currentTime)}</Text>
                    <Text
                        style={styles.timeRight}>- {Utils.formattedTime(this.props.songDuration - this.props.currentTime)}</Text>
                </View>
            </View>
        )
    }
}

