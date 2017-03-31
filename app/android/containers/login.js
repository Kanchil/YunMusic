import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils/util';
class Login extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Button title="登陆" onPress={Actions.home}>登陆
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width:Util.screen.width,
    backgroundColor:'red',
    flex:1,
  },

})

export default Login;
