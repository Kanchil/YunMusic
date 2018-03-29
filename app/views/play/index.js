import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    Platform,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slider';
import Video from 'react-native-video';

import { isFavoriate, favoriteSong, cancelFavorite } from '../../api/user'

import {
    ForwardButton,
    BackwardButton,
    PlayButton,
    ShuffleButton,
    VolumeButton,
    DownloadButton,
    SongSlider
} from '../../components/playBottons';

import Config from '../../config';

import {styles} from './index.style';

const window = Dimensions.get('window');

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
            playing: true,
            muted: false,
            shuffle: false,
            sliding: false,
            currentTime: 0,
            songIndex: props.songIndex,
            songs: props.searchedSongs || this.props.songs,
            like: false
        };
    }

    togglePlay() {
        this.setState({playing: !this.state.playing});
    }

    toggleVolume() {
        this.setState({muted: !this.state.muted});
    }

    toggleShuffle() {
        this.setState({shuffle: !this.state.shuffle});
    }

    goBackward() {
        if (this.state.songIndex !== 0) {
            this.setState({
                songIndex: this.state.songIndex - 1,
                currentTime: 0,
            });
        } else {
            this.setState({
                songIndex: this.state.songs.length - 1,
                currentTime: 0,
            });
        }
    }

    goForward() {
        this.setState({
            songIndex: this.state.shuffle ? this.randomSongIndex() : (this.state.songIndex + 1 > this.state.songs.length - 1 ? 0 : this.state.songIndex + 1),
            currentTime: 0,
        });
        this.refs.audio.seek(0);
    }

    randomSongIndex() {
        let maxIndex = this.props.songs.length - 1;
        return Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0;
    }

    setTime(params) {
        if (!this.state.sliding) {
            this.setState({currentTime: params.currentTime});
        }
    }

    setPlayingSong() {
        let song = this.state.songs[this.state.songIndex];
    }

    onLoad(params) {
        this.setState({songDuration: params.duration});
        this.setPlayingSong();
    }

    onSlidingStart() {
        this.setState({sliding: true});
    }

    onSlidingChange(value) {
        let newPosition = value * this.state.songDuration;
        this.setState({currentTime: newPosition});
    }

    onSlidingComplete() {
        this.refs.audio.seek(this.state.currentTime);
        this.setState({sliding: false});
    }

    onEnd() {
        this.setState({playing: false});
        this.setState({playing: true});
    }

    componentDidMount() {
        storage.load({
            key: 'userInfo'
        }).then(ret => {
            console.log(ret, 'ret')
            if (ret.length > 0 && ret[0].uid) {
                this.setState({userId: ret[0].uid});
                //判断是否已收藏
                this.isFavoriate();
            }
        })
    }

    renderVideoPlayer() {
        if (this.state.songs[this.state.songIndex]) {
            if (this.props.islocal) {
                return (<Video
                    source={{uri: (Platform.OS == 'android' ? "file://" : "") + this.state.songs[this.state.songIndex].listen_url}}
                    volume={this.state.muted ? 0 : 1.0}
                    muted={false}
                    ref="audio"
                    paused={!this.state.playing}
                    playInBackground={false}
                    onLoad={this.onLoad.bind(this)}
                    onProgress={this.setTime.bind(this)}
                    onEnd={this.onEnd.bind(this)}
                    resizeMode="cover"
                    repeat={false}/>);
            } else {
                return (<Video
                    source={{uri: Config.FILE_URL + this.state.songs[this.state.songIndex].listen_url}}
                    volume={this.state.muted ? 0 : 1.0}
                    muted={false}
                    ref="audio"
                    paused={!this.state.playing}
                    playInBackground={true}
                    onLoad={this.onLoad.bind(this)}
                    onProgress={this.setTime.bind(this)}
                    onEnd={this.onEnd.bind(this)}
                    resizeMode="cover"
                    repeat={false}/>);
            }

        }
        return null;
    }

    renderThumb() {
        if (this.props.islocal) {
            if (this.state.songs[this.state.songIndex].cover_url) {
                return (
                    <Image
                        style={styles.songImage}
                        source={{
                            uri: (Platform.OS == 'android' ? "file://" : "") + this.state.songs[this.state.songIndex].cover_url,
                            width: window.width - 30,
                            height: 300
                        }}
                    />
                )
            } else {
                return (
                    <Image
                        style={[styles.songImage, {width: window.width - 30, height: 300}]}
                        source={require('../../assets/images/dd.jpg')}
                    />
                )
            }
        } else {
            if (this.state.songs[this.state.songIndex].cover_url) {
                return (
                    <Image
                        style={styles.songImage}
                        source={{
                            uri: Config.FILE_URL + this.state.songs[this.state.songIndex].cover_url,
                            width: window.width - 30,
                            height: 300
                        }}
                    />
                )
            } else {
                return (
                    <Image
                        style={[styles.songImage, {width: window.width - 30, height: 300}]}
                        source={require('../../assets/images/dd.jpg')}
                    />
                )
            }
        }
    }
    // 判断是否已经登录
    async isLogin() {
        return await storage.load({
            key: 'userInfo'
        }).then(ret => {
            if (ret.length > 0 && ret[0].uid) {
                this.setState({userId: ret[0].uid});
            } else {
                Alert.alert("您还未登陆！");
                Actions.login();
            }
        })
    }
    //取消收藏
    async cancelFavorite() {
        let song = this.props.songs[this.state.songIndex] || this.state.songs[this.state.songIndex];
        let songId = song.id; //歌曲id
        await this.isLogin().then(() => {
            let param = {
                songId: songId,
                userId: this.state.userId
            }
            cancelFavorite(param).then(data => {
                if (data) {
                    this.setState({
                        like: false
                    })
                    Alert.alert("取消成功！");
                } else {
                    Alert.alert("取消失败！");
                    return false;
                }
            }).catch(error => {
                Alert.alert(error.message)
            })
        }).catch(() => {
            Alert.alert("您还未登陆！");
            Actions.login();
        })
    }
    //判断是否已收藏
    async isFavoriate() {
        let song = this.props.songs[this.state.songIndex] || this.state.songs[this.state.songIndex];
        let songId = song.id; //歌曲id
        await this.isLogin().then(() => {
            let param = {
                songId: songId,
                userId: this.state.userId
            }
            isFavoriate(param).then((data) => {
                if (data) {
                    this.setState({
                        like: true
                    })
                } else {
                    this.setState({
                        like: false
                    })
                }
            }).catch(error => {
                Alert.alert(error.message)
            })
        }).catch(() => {
            Alert.alert("您还未登陆！");
            Actions.login();
        })
    }
    //收藏
    async favorite() {
        let song = this.props.songs[this.state.songIndex] || this.state.songs[this.state.songIndex];
        let songId = song.id; //歌曲id
        await this.isLogin().then(() => {
            let param = {
                songId: songId,
                userId: this.state.userId
            }
            favoriteSong(param).then(data => {
                if (data) {
                    this.setState({
                        like: true
                    })
                    Alert.alert("收藏成功！");
                } else {
                    Alert.alert("收藏失败！");
                    return false;
                }
            }).catch(error => {
                Alert.alert(error.message)
            })
        }).catch(() => {
            Alert.alert("您还未登陆！");
            Actions.login();
        })
    }


    render() {
        let songPlaying = this.props.songs[this.state.songIndex];
        let songPercentage;
        if (this.state.songDuration !== undefined) {
            songPercentage = this.state.currentTime / this.state.songDuration;
        } else {
            songPercentage = 0;
        }
        return (
            <View style={styles.container}>
                {this.renderVideoPlayer()}
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {this.state.songs[this.state.songIndex].artist_name}
                    </Text>
                </View>
                <TouchableOpacity style={styles.headerClose} onPress={Actions.pop}>
                    <FontAwesome name="chevron-left" size={15} color="#fff"/>
                </TouchableOpacity>
                {
                    this.state.like ?
                        <TouchableOpacity style={styles.headerfavoriate} onPress={this.cancelFavorite.bind(this)}>
                            <FontAwesome name="heart" size={25} color="red"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.headerfavoriate} onPress={this.favorite.bind(this)}>
                            <FontAwesome name="heart-o" size={25} color="#fff"/>
                        </TouchableOpacity>
                }
                {this.renderThumb()}
                <Text style={styles.songTitle}>
                    {this.state.songs[this.state.songIndex].name}
                </Text>
                <Text style={styles.albumTitle}>
                    {this.state.songs[this.state.songIndex].artist_name}
                </Text>
                <View style={styles.sliderContainer}>
                    <SongSlider
                        onSlidingStart={this.onSlidingStart.bind(this)}
                        onSlidingComplete={this.onSlidingComplete.bind(this)}
                        onValueChange={this.onSlidingChange.bind(this)}
                        value={songPercentage}
                        songDuration={this.state.songDuration}
                        currentTime={this.state.currentTime}
                    />
                </View>
                <View style={styles.controls}>
                    <ShuffleButton
                        shuffle={this.state.shuffle}
                        toggleShuffle={this.toggleShuffle.bind(this)}
                        disabled={this.props.search}
                    />
                    <BackwardButton
                        goBackward={this.goBackward.bind(this)}
                        songs={this.state.songs}
                        shuffle={this.state.shuffle}
                        songIndex={this.state.songIndex}
                        disabled={this.props.search}
                    />
                    <PlayButton
                        togglePlay={this.togglePlay.bind(this)}
                        playing={this.state.playing}
                    />
                    <ForwardButton
                        songs={this.state.songs}
                        shuffle={this.state.shuffle}
                        songIndex={this.state.songIndex}
                        goForward={this.goForward.bind(this)}
                        disabled={this.props.search}
                    />
                    <VolumeButton
                        muted={this.state.muted}
                        toggleVolume={this.toggleVolume.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
        songs: store.songs,
        searchResults: store.searchResults,
        progreses: store.progreses,
        playing: store.playing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);