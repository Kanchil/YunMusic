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
import Util from './app/android/utils/util';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollBar from './app/android/view/scrollbar';
import Music from './app/android/view/music';
import User from './app/android/view/user';
import Community from './app/android/view/community';
import PlayController from './app/android/view/playController';
export default class YunMusic extends Component {
  constructor(props) {
		super(props);
		this.state = {
			tabNames: ['音乐', '用户', '动态'],
      tabIconNames: ['ios-musical-notes-outline', 'ios-person-outline', 'ios-star-outline'],
		};
	}
  render() {
    let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
		return (
			<View style={styles.container}>
				<View style={styles.tabArea}>
					<ScrollableTabView
					renderTabBar={() => <ScrollBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
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
        <View style={styles.playArea}>
          <PlayController />
				</View>
			</View>
		);
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
  content: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f5f5f5',
		flex: 1
	},
	playArea:{
		flex:Util.screen.width,
		height:80
	},
  tabArea:{
    height:Util.screen.hight - 105,
    backgroundColor:'#4B3E4D'
  }
});

AppRegistry.registerComponent('YunMusic', () => YunMusic);
