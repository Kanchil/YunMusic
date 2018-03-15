import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Drawer from 'react-native-drawer';

import ScrollBar from '../../components/scrollbar';
import Menu from '../menu';
import Music from '../music';
import User from '../user';

import Util from '../../utils/';

import { styles } from './index.style';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['音乐', '用户', '动态'],
            tabIconNames: ['ios-musical-notes-outline', 'ios-person-outline', 'ios-star-outline'],
            drawerState: false
        }
    }
    switchDrawer(state){
        this.setState({
            drawerState: state
        })
    }
    render() {
        let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
        return (
            <Drawer
                type = "overlay"
                content = { <Menu /> }
                openDrawerOffset = { Util.screen.width - 200 }
                tapToClose = {true}
                open = { this.state.drawerState }>
                <View style = { styles.container }>
                    <View style = { styles.tabArea }>
                        <ScrollableTabView
                            tabBarPosition = 'top'
                            renderTabBar = {() =>
                                <ScrollBar 
                                    drawerState = { this.state.drawerState } 
                                    callFuc = { this.switchDrawer.bind(this) } 
                                    tabNames = { tabNames } 
                                    tabIconNames = { tabIconNames } />
                                }>
                                <View style = { styles.content } tabLabel='key1'>
                                    <Music />
                                </View>
                                <View style = { styles.content } tabLabel='key2'>
                                    <User />
                                </View>
                        </ScrollableTabView>
                    </View>
                </View>
            </Drawer>
        );
    }
}
