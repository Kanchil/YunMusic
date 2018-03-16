import React, {
  Component
} from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import AdSwiper from '../../components/adSwiper/';
import Category from '../category/';
import Recommend from '../recommend/';

export default class Music extends Component {

  constructor(props) {
    super(props);
    this.state = {
      swipers: [
        {
          title: '【高燃】 游戏原声集锦',
          image_url: 'http://fakeimg.pl/350x180/ff0000'
        },
        {
          title: '朗月清风 笙歌满路',
          image_url: 'http://fakeimg.pl/350x180/00ff00'
        },
        {
          title: '那些年追过的动漫音乐精选',
          image_url: 'http://fakeimg.pl/350x180/0000ff'
        }
      ]
    }
  }

  render() {
    return ( 
      <ScrollView style = { styles.container } >
          <AdSwiper items = { this.state.swipers } />
          <Category />
          <Recommend title = "影视金曲" listType="4" />
          <Recommend title = "最新单曲" listType="5" />
          <Recommend title = "欧美金曲" listType="6" />
          <View style = {{ backgroundColor: '#fff', height: 40 }}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});