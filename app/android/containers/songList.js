import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity ,
  View,
  ActivityIndicator,
  InteractionManager,
  Image
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Song from '../components/song';
import styles from '../styles/songList';
class SongList extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[],
      listType:props.listType,
      isLoading:true
    }
  }
  onPress(song) {
    console.log("onPress")
    this.props.downloadMusic(song);
  }
  songClick(song, index) {
    Actions.play({searchedSongs: this.state.songs, songIndex: index, onMusicDownload: this.onPress.bind(this)})
  }
  async getSongInfo(songids){
    const result = [];
    for (var i = 0; i < songids.length; i++) {
      const res = await fetch(`http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid=${songids[i]}`)
      const resText = await res.json();
      result.push({
        song_id:resText.songinfo.song_id,
        author:resText.songinfo.author,
        title:resText.songinfo.title,
        thumb:resText.songinfo.pic_big,
        path:resText.bitrate.file_link
      })
    }
    return result;
  }
  componentDidMount(){
    const listType = this.props.listType;
    const result = [];
    InteractionManager.runAfterInteractions(() => {
      fetch(`http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${listType}&size=10&offset=0`)
      .then(res => res.json())
      .then(resText => {
        const songids = resText.song_list.map(item => {return item.song_id});
        this.getSongInfo(songids).then(result => {
          console.log(result)
          this.setState({
            songs:result,
            isLoading:false
          })
        })
    })
    })

  }
  renderLoading(){
    if(this.state.isLoading){
      return <ActivityIndicator size="large" color='#4B3E4D' style={{marginTop:5}}/>
    }
  }
  playAll(){
    if (this.state.isLoading) {
      return false
    }
    Actions.play({searchedSongs: this.state.songs, songIndex: 0, onMusicDownload: this.onPress.bind(this)})
  }
  render(){
    return (
      <View style={styles.container}>
        <ParallaxScrollView
            style={styles.parallax}
            backgroundColor="#f5f5f5"
            contentBackgroundColor="#fff"
            parallaxHeaderHeight={200}
            showsVerticalScrollIndicator={false}
            renderForeground={() => (
                <View style={styles.header}>
                  <Image style={styles.hdBg} source={require('../images/dd.jpg')}>
                    <View style={styles.avatar}>
                      <Image style={styles.avatarImg} source={require('../images/korea.png')}></Image>
                    </View>
                    <View style={styles.hdBottom}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.nickname}>默默哒谬</Text>
                        <Text style={styles.rank}>Lv.8</Text>
                      </View>
                    </View>
                  </Image>
                </View>
            )}>
          <View style={{backgroundColor:'#fff'}}>
            <View style={styles.top}>
                <Icon style={styles.optionIcon} name="md-play" size={26} color="#333"></Icon>
                <TouchableOpacity onPress={this.playAll.bind(this)} style={styles.headerCon}>
                  <Text style={styles.playAll}>播放全部</Text>
                  <Text style={styles.songsNum}>共{this.state.songs.length}首</Text>
                </TouchableOpacity>
            </View>
            {this.renderLoading()}
            {this.state.songs.map((song, index) => {
              return (
                <Song
                  key={index}
                  orderNum={index+1}
                  onPress={this.songClick.bind(this, song, index)}
                  songName={song.title}
                  artistName={song.author}
                  songImage={song.thumb}
                  id={song.song_id}
                  progreses={this.props.progreses}
                  downloading={song.downloading}
                  downloadMusic={this.onPress.bind(this, song)}
                  search={true}
                  />
              )
            })}
          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
      searchResults: store.searchResults,
      progreses: store.progreses
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongList);
