import getData from '../../utils/fetch';

export async function getSongs(listType, pos){
    console.log(getData)
    return getData({
        url: `/index/getSongListByType&album_id=${listType}&position=${pos}`,
        method: 'get'
    })
}