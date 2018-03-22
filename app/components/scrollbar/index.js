import React, {
    Component
} from 'react';

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Actions
} from 'react-native-router-flux';

import {styles} from './index.style';

export default class ScrollBar extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        goToPage: PropTypes.func, // 跳转到对应tab的方法
        activeTab: PropTypes.number, // 当前被选中的tab下标
        tabs: PropTypes.array, // 所有tabs集合
        tabNames: PropTypes.array, // 保存Tab名称
        tabIconNames: PropTypes.array, // 保存Tab图标
    }

    switchDrawer() {
        this.props.callFuc(true);
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
            <TouchableOpacity key={i} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]} // 图标
                        size={24}
                        color={color}/>
                    <Text style={{fontSize: 12, color: color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.tabs}>
                <TouchableOpacity onPress={this.switchDrawer.bind(this)}>
                    <Icon style={styles.menu} name="ios-menu-outline" size={30} color="#fff"></Icon>
                </TouchableOpacity>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                <TouchableOpacity onPress={() => Actions.search()}>
                    <Icon style={styles.search} name="ios-search-outline" size={30} color="#fff"></Icon>
                </TouchableOpacity>
            </View>
        );
    }

}