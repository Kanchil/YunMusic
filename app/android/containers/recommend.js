import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Util from '../utils/util';
import IndexSong from '../components/indexSong';
class Recommend extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[],
      listType:this.props.listType
    }
  }
  //通过歌曲id数组获得一组歌曲信息
  // async getSongInfo(songids){
  //   const result = [];
  //   for (var i = 0; i < songids.length; i++) {
  //     const res = await fetch(`http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid=${songids[i]}`)
  //     const resText = await res.json();
  //     result.push({
  //       song_id:resText.songinfo.song_id,
  //       author:resText.songinfo.author,
  //       title:resText.songinfo.title,
  //       thumb:resText.songinfo.pic_big,
  //       path:resText.bitrate.file_link
  //     })
  //   }
  //   return result;
  // }

  componentDidMount(){
    // fetch(`http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${this.state.listType}&size=6&offset=0`)
    fetch(`http://101.200.55.241/yunmusicadmin/api.php?s=/index/getSongListByType&album_id=${this.state.listType}&limit=10`)
    .then(res => res.json())
    .then(resText=>{
      this.setState({
        songs:resText.data
      })
    })
  }
  onPress(song) {
    console.log("onPress")
    this.props.downloadMusic(song);
  }

  getMore(){
    Actions.songList({listType:this.state.listType})
  }

  songClick(song,index){
    Actions.play({searchedSongs:this.state.songs,songIndex:index,onMusicDownload:this.onPress.bind(this)})
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.conTop}>
          <Text style={styles.conTitle}>{this.props.title}</Text>
          <TouchableOpacity onPress={this.getMore.bind(this)}>
            <Text style={styles.conMore}>更多&gt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.conContainer}>
          {
            this.state.songs.map((song,index) => {
              return (
                <IndexSong
                  key={index}
                  songImage={song.cover_url}
                  title={song.name}
                  onPress={this.songClick.bind(this,song,index)}
                  downloadMusic={this.onPress.bind(this, song)}
                  search={true}
                   />
              )
            })
          }
        </View>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
      searchResults: store.searchResults,
      progreses: store.progreses
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:Util.screen.width,
    marginBottom:5
  },
  conTop:{
    width:Util.screen.width,
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  conTitle:{
    fontSize:16,
    color:'#333',
    marginLeft:10
  },
  conMore:{
    fontSize:13,
    color:'#999',
    marginRight:10
  },
  conContainer:{
    width:Util.screen.width,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  conItem:{
    width:(Util.screen.width)/3,
    alignItems:'center',
    marginBottom:15
  },
  conImg:{
    width:100,
    height:100,
  },
  conSong:{
    width:(Util.screen.width)/3,
    paddingLeft:5,
    paddingRight:5,
    textAlign:'center',
    color:'#333',
    fontSize:13
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
