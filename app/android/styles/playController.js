import {StyleSheet} from 'react-native';
import Util from '../utils/util';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width:Util.screen.width,
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#4B3E4D',
  },
  songInfo:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  songText:{
    flex:1,
    marginLeft:5
  },
  thumb:{
    width:70,
    height:70,
    marginTop:5,
    marginLeft:5
  },
  songName:{
    fontSize:14,
    color:'#fff'
  },
  songer:{
    fontSize:12,
    color:'#fff'
  },
  controls: {
    height:40,
    flexDirection: 'row',
  },
  back: {
    marginTop: 5,
    marginLeft: 25,
  },
  play: {
    marginLeft: 20,
    marginRight: 20,
  },
  forward: {
    marginTop: 5,
    marginRight: 25,
  },
});

export default styles;
