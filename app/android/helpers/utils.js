import {AsyncStorage} from 'react-native';
import Config from '../config';


export async function getSongsFromStorage(){
  let songs = await AsyncStorage.getItem('songs');
  songs = songs || JSON.stringify([]);
  console.log(songs);
  return JSON.parse(songs);
}

export function findSongIncollection(id,songs){
  return songs.filter(song => song.id == id).length;
}


// export async function getSongUrl(id) {
//   let response = await fetch(`http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid=${id}`)
//   let res = await response.json();
//   return res.bitrate.file_link;
// }
//
// export function getSongUrl2(id){
//   fetch(`http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid=${id}`)
//   .then(res=>res.json())
//   .then(resText => {
//     console.log(resText)
//     var fileLink = resText.bitrate.file_link;
//     return fileLink;
//   })
// }

export function isAudioObject(contentType) {
  return contentType == "audio/mpeg";
}

export function formattedTime( timeInSeconds ){
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds - minutes * 60;

  if( isNaN(minutes) || isNaN(seconds) || minutes < 0 && seconds < 0){
    return "";
  } else {
    return(`${ withLeadingZero( minutes ) }:${ withLeadingZero( seconds.toFixed(0) ) }`);
  }
}

function withLeadingZero(amount){
  if (amount < 10 ){
    return `0${ amount }`;
  } else {
    return `${ amount }`;
  }
}
