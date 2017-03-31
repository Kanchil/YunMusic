import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Util from '../utils/util';
export default class IndexSong extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.conItem}>
        <Image style={styles.conImg} source={{uri: this.props.songImage}}></Image>
        <Text style={styles.conSong}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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
