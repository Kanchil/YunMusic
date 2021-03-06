import React, {Component} from 'react';
import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

import {styles} from './index.style';

export default class Album extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <TouchableHighlight style={styles.radius} activeOpacity={0.5} underlayColor="#4B3E4D"
                                        onPress={() => Actions.login({data: "Custom data", title: 'Custom title'})}>
                        <Icon name="md-musical-note" size={36} color="#4B3E4D"></Icon>
                    </TouchableHighlight>
                    <Text style={styles.itemText}>歌单</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.radius}>
                        <Icon name="md-star-half" size={36} color="#4B3E4D"></Icon>
                    </View>
                    <Text style={styles.itemText}>最推荐</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.radius}>
                        <Icon name="md-podium" size={36} color="#4B3E4D"></Icon>
                    </View>
                    <Text style={styles.itemText}>排行</Text>
                </View>
            </View>
        )
    }
}
