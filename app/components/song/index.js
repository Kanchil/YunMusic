import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';
import * as Progress from 'react-native-progress';
import Config from '../../config';

import { styles } from './index.style';
export default class Song extends Component {
    state = {
        songImage: "../../assets/images/korea.png"
    }
    swipeBtns = this.props.search
        ? ([
            {
                component: (
                    <View style={styles.downloadButtonContainer}>
                        <FontAwesome
                            name="download"
                            size={25}
                            color={this.props.downloading
                            ? '#333'
                            : '#fff'}/>
                    </View>
                ),
                onPress: this.props.downloading
                    ? (() => null)
                    : this.props.downloadMusic
            }
        ])
        : ([
            {
                text: '删除',
                backgroundColor: '#4B3E4D',
                onPress: () => {
                    this
                        .props
                        .deleteSong()
                }
            }
        ])

    renderProgressBar() {
        if (!this.props.progreses) 
            return null;
        var progress = this.props.progreses[this.props.id];
        if (this.props.search && (progress && progress > 0 && progress < 0.87)) 
            return <Progress.Bar
                progress={progress}
                width={width - 20}
                style={{
                marginLeft: 10
            }}
                color="#c8c3c3"
                borderColor="transparent"/>
        else 
            return null
    }
    renderThumb() {
        if (this.props.songImage) {
            if (this.props.search) {
                return (<Image
                    source={{
                    uri: Config.API_URL + this.props.songImage
                }}
                    style={styles.songTitleImage}/>)
            } else {
                return (<Image
                    source={{
                    uri: (Platform.OS == 'android'
                        ? 'file://'
                        : "") + this.props.songImage
                }}
                    style={styles.songTitleImage}/>)
            }
        } else {
            return (<Image source={require('../../assets/images/korea.png')} style={styles.songTitleImage}/>)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.songView} onPress={this.props.onPress}>
                    {this.renderThumb()}
                </TouchableOpacity>
                <View style={styles.spContainer}>
                    <Swipeout right={this.swipeBtns} backgroundColor='transparent' autoClose={true}>
                        <View style={styles.songContainer}>
                            <View style={styles.songView}>
                                <View style={styles.songTitleContainer}>
                                    <Text style={styles.songArtistText}>{this.props.songName || "Unknown Song"}</Text>
                                    <Text style={styles.songTitleText}>{this.props.artistName || "Unknown Artist"}</Text>
                                </View>
                            </View>
                        </View>
                        {this.renderProgressBar()}
                    </Swipeout>
                </View>
            </View>
        )
    }
}