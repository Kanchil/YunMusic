import * as types from './types';
import * as Utils from '../helpers/utils';
import Config from '../config';

export function searchSong(query) {
  return async (dispatch) => {
    let res = await fetch(`${Config.SEARCH_API_URL}${query}`);
    res = await res.json();
    // res = Utils.filterSearchResults(res.song);
    const result = res.data;
    // for (var i = 0; i < res.song.length; i++) {
    //   let file_res = await fetch(`http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid=${res.song[i].songid}`);
    //   let file_Text = await file_res.json();
    //   console.log(file_Text);
    //   result.push({
    //     song_id:file_Text.songinfo.song_id,
    //     author:file_Text.songinfo.author,
    //     title:file_Text.songinfo.title,
    //     path:file_Text.bitrate.file_link,
    //     thumb:file_Text.songinfo.pic_big
    //   })
    // }
    return dispatch(setSearchResults(result));
  }
}

export function setSearchResults(res) {
  return {
    type: types.SEARCH,
    res
  }
}
