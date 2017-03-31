import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Styles from '../styles';
import * as Progress from 'react-native-progress';
import Song from '../components/song';
import * as Utils from '../helpers/utils';

class SearchResults extends Component {
  onPress(song) {
    console.log("onPress")
    this.props.downloadMusic(song);
  }

  songClick(song, index) {
    Actions.play({searchedSongs: this.props.searchResults, songIndex: index, onMusicDownload: this.onPress.bind(this,song)})
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.searchResults.map((song, index) => {
            return <Song
                    key={index}
                    onPress={this.songClick.bind(this, song, index)}
                    songName={song.title}
                    artistName={song.author}
                    songImage={song.thumb}
                    id={song.song_id}
                    progreses={this.props.progreses}
                    downloading={song.downloading}
                    downloadMusic={this.onPress.bind(this, song)}
                    search={true}
                    />
          })
        }
      </ScrollView>
    );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
      searchResults: store.searchResults,
      progreses: store.progreses
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
