'use strict';
import React , {Component} from 'React';
import {
  AppRegistry,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  View
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slider';
import Video from 'react-native-video';
// import MusicControl from 'react-native-music-control';
import styles from '../styles/play';
import {ForwardButton, BackwardButton, PlayButton, ShuffleButton, VolumeButton, DownloadButton, SongSlider} from '../components/playBottons';

const window = Dimensions.get('window');

class Play extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: true,
      muted: false,
      shuffle: false,
      sliding: false,
      currentTime: 0,
      songIndex: props.songIndex,
      songs: props.searchedSongs || this.props.songs
    };
  }

  componentDidMount(){
    console.log(this.props.songs)
  }

  togglePlay(){
    this.setState({ playing: !this.state.playing });
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
      songIndex: this.state.shuffle ? this.randomSongIndex() : (this.state.songIndex + 1 > this.state.songs.length - 1 ? 0 : this.state.songIndex + 1),
      currentTime: 0,
    });
    this.refs.audio.seek(0);
  }

  randomSongIndex(){
    let maxIndex = this.props.songs.length - 1;
    return Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0;
  }

  setTime(params){
    if( !this.state.sliding ){
      this.setState({ currentTime: params.currentTime });
    }
  }

  setPlayingSong() {
    let song = this.state.songs[this.state.songIndex];
    // MusicControl.setNowPlaying({
    //   title: song.title,
    //   artwork: song.thumb,
    //   artist: song.author,
    //   duration: this.state.songDuration
    // });
  }

  onLoad(params){
    this.setState({ songDuration: params.duration });
    this.setPlayingSong();
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
    this.setState({playing: true});
  }

  componentDidMount() {
    // MusicControl.enableControl('play', true);
    // MusicControl.enableControl('pause', true);
    // MusicControl.enableControl('nextTrack', true);
    // MusicControl.enableControl('previousTrack', true);
    // MusicControl.enableControl('seekForward', false);
    // MusicControl.enableControl('seekBackward', false);
    // MusicControl.enableBackgroundMode(true);
    // MusicControl.on('play', ()=> {
    //   this.setState({playing: true});
    // });
    // MusicControl.on('pause', ()=> {
    //   this.setState({playing: false});
    // });
    // MusicControl.on('nextTrack', this.goForward.bind(this));
    // MusicControl.on('previousTrack', this.goBackward.bind(this));
  }

  renderVideoPlayer() {
    if(this.state.songs[this.state.songIndex]) {
    return (<Video
              source={{uri: this.state.songs[this.state.songIndex].path }}
              volume={this.state.muted ? 0 : 1.0}
              muted={false}
              ref="audio"
              paused={!this.state.playing}
              playInBackground={true}
              onLoad={ this.onLoad.bind(this) }
              onProgress={ this.setTime.bind(this) }
              onEnd={ this.onEnd.bind(this) }
              resizeMode="cover"
              repeat={false}/>);
      }
      return null;
  }

  renderThumb(){
    if(this.props.islocal){
      if (this.state.songs[this.state.songIndex].thumb ) {
        return (
          <Image
            style={ styles.songImage }
            source={{uri: (Platform.OS == 'android'?"file://": "") + this.state.songs[this.state.songIndex].thumb,
                          width: window.width - 30,
                          height: 300}}
          />
        )
      }else{
        return (
          <Image
            style={ [styles.songImage,{width: window.width - 30, height: 300}] }
            source={require('../images/dd.jpg')}
          />
        )
      }
    }else {
      if(this.state.songs[this.state.songIndex].thumb){
        return (
          <Image
            style={ styles.songImage }
            source={{uri: this.state.songs[this.state.songIndex].thumb,
                          width: window.width - 30,
                          height: 300}}
          />
        )
      }else{
        return (
          <Image
            style={ [styles.songImage,{width: window.width - 30, height: 300}] }
            source={require('../images/dd.jpg')}
          />
        )
      }
    }
  }

  render() {
    let songPlaying = this.props.songs[this.state.songIndex];
    let songPercentage;
    if( this.state.songDuration !== undefined ){
      songPercentage = this.state.currentTime / this.state.songDuration;
    } else {
      songPercentage = 0;
    }

    return (
      <View style={styles.container}>
        {this.renderVideoPlayer()}
        <View style={ styles.header }>
          <Text style={ styles.headerText }>
            {this.state.songs[this.state.songIndex].author}
          </Text>
        </View>
        <TouchableOpacity style={ styles.headerClose } onPress={ Actions.pop }>
          <FontAwesome name="chevron-left" size={15} color="#fff" />
        </TouchableOpacity>
        <DownloadButton
          download={this.props.searchedSongs}
          downloading={this.state.songs[this.state.songIndex].downloading}
          downloadMusic={() => this.props.onMusicDownload(this.state.songs[this.state.songIndex])}
        />
        {this.renderThumb()}
        <Text style={ styles.songTitle }>
          {this.state.songs[this.state.songIndex].title}
        </Text>
        <Text style={ styles.albumTitle }>
          {this.state.songs[this.state.songIndex].album_title}
        </Text>
        <View style={ styles.sliderContainer }>
          <SongSlider
          onSlidingStart={this.onSlidingStart.bind(this)}
          onSlidingComplete={ this.onSlidingComplete.bind(this) }
          onValueChange={ this.onSlidingChange.bind(this) }
          value={ songPercentage }
          songDuration={this.state.songDuration}
          currentTime={this.state.currentTime}
        />
        </View>
        <View style={ styles.controls }>
          <ShuffleButton
            shuffle={this.state.shuffle}
            toggleShuffle={this.toggleShuffle.bind(this)}
            disabled={this.props.search}
          />
          <BackwardButton
            goBackward={this.goBackward.bind(this)}
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
      playing:store.playing
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Play);
