import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from '../styles';
import Swipeout from 'react-native-swipeout';
import * as Progress from 'react-native-progress';
import Config from '../config/';
export default class Song extends Component {
  state = {songImage: "../images/korea.png"}
  swipeBtns = this.props.search?([{
      component: (
         <View style={Styles.downloadButtonContainer}>
              <FontAwesome name="download" size={25} color={this.props.downloading?'#333': '#fff'} />
          </View>
        ),
        onPress: this.props.downloading?(() => null): this.props.downloadMusic
    }]): ([{
      text: '删除',
      backgroundColor: '#4B3E4D',
      onPress: () => { this.props.deleteSong() }
    }])

  renderProgressBar() {
    if(!this.props.progreses) return null;
    var progress = this.props.progreses[this.props.id];
    if(this.props.search && (progress && progress > 0 && progress < 0.87))
      return <Progress.Bar progress={progress} width={width - 20} style={{marginLeft: 10}} color="#c8c3c3" borderColor="transparent"/>
    else return null
  }
  renderThumb(){
    if(this.props.songImage){
      if(this.props.search){
        return (
          <Image
            source={{uri: Config.API_URL+this.props.songImage}}
            style={Styles.songTitleImage}
          />
        )
      }else{
        return (
          <Image
            source={{uri: (Platform.OS == 'android'?'file://': "") + this.props.songImage}}
            style={Styles.songTitleImage}
          />
        )
      }
    }else {
      return (
        <Image
          source={require('../images/korea.png')}
          style={Styles.songTitleImage}
        />
      )
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.songView} onPress={this.props.onPress}>
          {this.renderThumb()}
        </TouchableOpacity>
        <View style={styles.spContainer}>
          <Swipeout
              right={this.swipeBtns}
              backgroundColor= 'transparent'
              autoClose={true}
              >
              <View style={Styles.songContainer}>
                <View style={Styles.songView}>
                  <View style={Styles.songTitleContainer}>
                    <Text style={Styles.songArtistText}>{this.props.songName || "Unknown Song"}</Text>
                    <Text style={Styles.songTitleText}>{this.props.artistName || "Unknown Artist"}</Text>
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

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  spContainer:{
    width:Util.screen.width - 50
  },
  songItem:{
    width:Util.screen.width,
    height:60,
    flexDirection:'row',
    alignItems:'center'
  },
  songRight:{
    flex:1,
    height:60,
    borderBottomWidth:Util.pixel,
    borderColor:'#ddd',
    flexDirection:'row',
    alignItems:'center'
  },
  songIcon:{
    width:40,
    alignItems:'center',
    textAlign:'center'
  },
  songOrder:{
    width:40,
    alignItems:'center',
    textAlign:'center',
    fontSize:14,
    color:'#999'
  },
  optionIcon:{
    width:40,
    alignItems:'center',
    textAlign:'center'
  },
  songInfo:{
    flex:1,
  },
  songTitle:{
    color:'#333',
    fontSize:14,
  },
  songAuthor:{
    color:'#999',
    fontSize:10
  }
})
