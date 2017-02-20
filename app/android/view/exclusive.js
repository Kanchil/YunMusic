import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Util from '../utils/util';
class Exclusive extends Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.conTop}>
          <Text style={styles.conTitle}>独家放送</Text>
          <Text style={styles.conMore}>更多&gt;</Text>
        </View>
        <View style={styles.conContainer}>
          <View style={styles.conItem}>
            <Image style={styles.conImg} source={require('../images/korea.png')}></Image>
            <Text style={styles.conSong}>歌手2017·原唱合辑</Text>
          </View>
          <View style={styles.conItem}>
            <Image style={styles.conImg} source={require('../images/korea.png')}></Image>
            <Text style={styles.conSong}>歌手2017·原唱合辑</Text>
          </View>
          <View style={styles.conItem}>
            <Image style={styles.conImg} source={require('../images/korea.png')}></Image>
            <Text style={styles.conSong}>歌手2017·原唱合辑</Text>
          </View>
          <View style={styles.conItem}>
            <Image style={styles.conImg} source={require('../images/korea.png')}></Image>
            <Text style={styles.conSong}>歌手2017·原唱合辑</Text>
          </View>
          <View style={styles.conItem}>
            <Image style={styles.conImg} source={require('../images/korea.png')}></Image>
            <Text style={styles.conSong}>歌手2017·原唱合辑</Text>
          </View>
        </View>
      </View>
    )
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
    height:20,
    color:'#333',
    fontSize:14
  }

})

export default Exclusive;
