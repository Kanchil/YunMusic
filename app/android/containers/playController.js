/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import {Actions} from 'react-native-router-flux';
import {Artist} from '../mockData';
import styles from '../styles/playController';
class PlayController extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: this.props.playing,
      muted: false,
      shuffle: false,
      sliding: false,
      currentTime: 0,
      songIndex: 0,
    };
  }

  // componentDidMount() {
  //   this.props.getSongs();
  // }

  togglePlay(){
    // this.setState({ playing: !this.state.playing });
    this.props.togglePlay(this.props.playing)
  }

  toggleVolume(){
    this.setState({ muted: !this.state.muted });
  }

  toggleShuffle(){
    this.setState({ shuffle: !this.state.shuffle });
  }

  goBackward(){
    if(this.state.currentTime < 3 && this.state.songIndex !== 0 ){
      this.setState({
        songIndex: this.state.songIndex - 1,
        currentTime: 0,
      });
    } else {
      this.refs.audio.seek(0);
      this.setState({
        currentTime: 0,
      });
    }
  }

  goForward(){
    this.setState({
      songIndex: this.state.shuffle ? this.randomSongIndex() : this.state.songIndex + 1,
      currentTime: 0,
    });
    this.refs.audio.seek(0);
  }

  randomSongIndex(){
    let maxIndex = 1 - 1;
    return Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0;
  }

  setTime(params){
    if( !this.state.sliding ){
      this.setState({ currentTime: params.currentTime });
    }
  }

  onLoad(params){
    this.setState({ songDuration: params.duration });
  }

  onSlidingStart(){
    this.setState({ sliding: true });
  }

  onSlidingChange(value){
    let newPosition = value * this.state.songDuration;
    this.setState({ currentTime: newPosition });
  }

  onSlidingComplete(){
    this.refs.audio.seek( this.state.currentTime );
    this.setState({ sliding: false });
  }

  onEnd(){
    this.setState({ playing: false });
  }

  render() {
    let playButton;
    if( this.props.playing ){
      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="ios-pause" size={36} color="#fff" />;
    } else {
      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="ios-play" size={36} color="#fff" />;
    }

    let forwardButton;
    if( !this.state.shuffle && this.state.songIndex + 1 === 1 ){
      forwardButton = <Icon style={ styles.forward } name="ios-skip-forward" size={25} color="#fff" />;
    } else {
      forwardButton = <Icon onPress={ this.goForward.bind(this) } style={ styles.forward } name="ios-skip-forward" size={25} color="#fff" />;
    }

    let volumeButton;
    if( this.state.muted ){
      volumeButton = <Icon onPress={ this.toggleVolume.bind(this) } style={ styles.volume } name="ios-volume-off" size={25} color="#fff" />;
    } else {
      volumeButton = <Icon onPress={ this.toggleVolume.bind(this) } style={ styles.volume } name="ios-volume-off" size={25} color="#fff" />;
    }

    let shuffleButton;
    if( this.state.shuffle ){
      shuffleButton = <Icon onPress={ this.toggleShuffle.bind(this) } style={ styles.shuffle } name="ios-shuffle" size={25} color="#f622576" />;
    } else {
      shuffleButton = <Icon onPress={ this.toggleShuffle.bind(this) } style={ styles.shuffle } name="ios-shuffle" size={25} color="#fff" />;
    }
    const artist = Artist[0];
    return (
      <View style={styles.container}>
        <View style={styles.songInfo}>
          <TouchableHighlight activeOpacity={0.5} underlayColor="#4B3E4D"
            onPress={
              () => Actions.play({songIndex: 0,songs: artist.songs,image: artist.background,artist: artist })
            }
            >
          <Image
            style={styles.thumb}
            source={require('../images/korea.png')}
          />
        </TouchableHighlight>
        <View style={styles.songText}>
          <Text style={styles.songName}>繁华繁华繁华繁华繁华繁华</Text>
          <Text style={styles.songer}>董贞</Text>
        </View>
        </View>
        <View style={ styles.controls }>
            <Icon onPress={ this.goBackward.bind(this) } style={ styles.back } name="ios-skip-backward" size={25} color="#fff" />
            { playButton }
            { forwardButton }
          </View>
      </View>
    );
  }
}

function mapStateToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}
function mapDispatchToProps(store){
  return {
      songs: store.songs,
      searchResults: store.searchResults,
      progreses: store.progreses,
      playing:store.playing
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayController);
