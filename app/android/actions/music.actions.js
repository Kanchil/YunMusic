import * as types from './types';
import Config from '../config';
import RNFetchBlob from 'react-native-fetch-blob';
import * as Utils from '../helpers/utils';
import {AsyncStorage} from 'react-native';
import RNFS from 'react-native-fs';
export function downloadMusic(song){
  return async (dispath) => {
    song.downloading = true;
    let songs = await Utils.getSongsFromStorage();
    if (Utils.findSongIncollection(song.song_id,songs)) {
      return {};
    }
    let dirs = RNFetchBlob.fs.dirs;
    // let file_response = await fetch(`http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid=${song.song_id}`)
    // let file_res = await file_response.json();
    // const file_link = file_res.bitrate.file_link;
    // console.log('aa'+file_link);
    // console.log(song.song_id);
    const songRes = await RNFetchBlob
                    .config({
                      path:`${dirs.DocumentDir}/${song.song_id}.mp3`
                    })
                    .fetch('GET',song.path,{})
                    .progress((received,total) => {
                      dispath(setProgress(received / total),song.song_id);
                    });
    const headers  = songRes.respInfo.headers;
    if (!Utils.isAudioObject(headers['Content-Type'])) {
      return;
    }
    const imgRes = await RNFetchBlob.config({
      path:`${dirs.DocumentDir}/${song.song_id}.jpg`
    })
    .fetch('GET',song.thumb,{});
    song.downloading = false;
    let newSong = {...song};
    newSong.path = songRes.path();
    newSong.thumb = imgRes.path();
    songs = JSON.stringify([...songs,newSong]);
    await AsyncStorage.setItem('songs',songs);
    return dispath(setSongs(JSON.parse(songs)));
  }
}

export function musicDownloaded(path){
  return {
    type:types.DOWNLOADED,
    path
  }
}

export function getSongs(){
  return async (dispath) => {
    let songs = await Utils.getSongsFromStorage();
    console.log(songs);
    return dispath(setSongs(songs));
  }
}

export function deleteSong(index,song){
  return async (dispath) => {
    let songs = await Utils.getSongsFromStorage();
    try {
      await RNFS.unlink(song.path);
      await RNFS.unlink(song.thumb);
      songs.splice(index,1);
      await AsyncStorage.setItem('songs',JSON.stringify(songs));
      return dispath(setSongs(songs));
    } catch (err) {
      //如果没有发现歌曲
      songs.splice(index,1);
      await AsyncStorage.setItem('songs',JSON.stringify(songs));
      return dispath(setSongs(songs));
    }
  }
}

export function setSongs(songs){
  return {
    type: types.SONGS,
    songs
  }
}

export function setProgress(progress,id){
  return {
    type: types.PROGRESS,
    progress,
    id
  }
}
