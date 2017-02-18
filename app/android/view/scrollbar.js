'use strict';

import React, {Component} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class ScrollBar extends Component {

	static propTypes = {
		goToPage: React.PropTypes.func, // 跳转到对应tab的方法
		activeTab: React.PropTypes.number, // 当前被选中的tab下标
		tabs: React.PropTypes.array, // 所有tabs集合

		tabNames: React.PropTypes.array, // 保存Tab名称
		tabIconNames: React.PropTypes.array, // 保存Tab图标
	}

	setAnimationValue({value}) {
		console.log(value);
	}

	componentDidMount() {
		// Animated.Value监听范围 [0, tab数量-1]
		this.props.scrollValue.addListener(this.setAnimationValue);
	}

	renderTabOption(tab, i) {
		let color = this.props.activeTab == i ? "#DBD8A2" : "#fff"; // 判断i是否是当前选中的tab，设置不同的颜色
		return (
			<TouchableOpacity key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
				<View style={styles.tabItem}>
					<Icon
						name={this.props.tabIconNames[i]} // 图标
						size={24}
						color={color}/>
					<Text style={{fontSize:12,color:color}}>
						{this.props.tabNames[i]}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={styles.tabs}>
				{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		height: 54,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
        paddingTop:2,
        paddingBottom:2
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	}
});


export default ScrollBar;
