/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Util from '../utils/util';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollBar from './scrollbar';
import Music from './music';
import User from './user';
import Community from './community';
import PlayController from './playController';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from 'react-native-drawer';
import Menu from './menu';
class Home extends Component {
  constructor(props) {
		super(props);
		this.state = {
			tabNames: ['音乐', '用户', '动态'],
      tabIconNames: ['ios-musical-notes-outline', 'ios-person-outline', 'ios-star-outline'],
      drawerState:false
    };
	}
  switchDrawer(state){
    this.setState({
      drawerState:state
    })
  }
  render() {
    let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
		return (
      <Drawer
        type="overlay"
        content={<Menu />}
        openDrawerOffset={Util.screen.width - 200}
        tapToClose={true}
        open={this.state.drawerState}
      >
      <View style={styles.container}>
        <View style={styles.tabArea}>
          <ScrollableTabView
          renderTabBar={() => <ScrollBar drawerState={this.state.drawerState} callFuc={this.switchDrawer.bind(this)} tabNames={tabNames} tabIconNames={tabIconNames}/>}
          tabBarPosition='top'>
          <View style={styles.content} tabLabel='key1'>
            <Music />
          </View>
          <View style={styles.content} tabLabel='key2'>
            <User />
          </View>
          <View style={styles.content} tabLabel='key3'>
            <Community />
          </View>
        </ScrollableTabView>
        </View>

      </View>

      </Drawer>

		);
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
  content: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1
	},
	playArea:{
    width:Util.screen.width,
		flex:1,
		height:80
	},
  tabArea:{
    width:Util.screen.width,
    flexDirection:'row',
    height:Util.screen.hight - 25,
    backgroundColor:'#4B3E4D'
  }
});
export default Home;
