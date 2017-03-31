import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Styles from '../styles';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { Hideo } from 'react-native-textinput-effects';
import SearchResults from './searchResult';


class Search extends Component {
  state = {searchQuery: ''}

  search(query) {
    this.props.searchSong(query);
  }

  render() {
    return (
        <View style={Styles.homeContainer}>
          <View style={Styles.searchInputContainer}>
            <Hideo
              iconClass={Icon}
              iconName={'ios-search-outline'}
              iconColor={'white'}
              iconBackgroundColor={'#4B3E4D'}
              inputStyle={{ color: '#464949' }}
              placeholder="请输入歌曲名字"
              value={this.state.searchQuery}
              onChangeText={searchQuery => this.setState({searchQuery})}
              onSubmitEditing={() => this.search(this.state.searchQuery)}
              />
            </View>
            <SearchResults />
        </View>
   );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
      songs: store.songs,
      searchResults: store.searchResults,
      progreses: store.progreses
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
