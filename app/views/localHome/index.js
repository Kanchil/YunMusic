import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import * as Progress from 'react-native-progress';
import Downloads from '../downloads';

import { styles } from './index.style';

class Home extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  deleteSong(index, song) {
    this.props.deleteSong(index, song);
  }

  render() {
    return (
      <ScrollableTabView
          style={{marginTop: 5,height:300}}
          locked={true}
          tabBarUnderlineStyle={{backgroundColor: "#fff"}}
          tabBarActiveTextColor="#c8c3c3"
          initialPage={Platform.OS=='ios'?1: 0}>
        <Downloads
          tabLabel="Downloads"
          songs={this.props.songs}
          deleteSong={this.deleteSong.bind(this)}
        />
      </ScrollableTabView>
   );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
      songs: store.songs,
      progress: store.progress,
      playing:store.playing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);