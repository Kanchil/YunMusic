import getData from '../../utils/fetch';

/**
 * 根据专辑获取歌曲列表
 */
export function getSongsByAlbum(listType = 0, limit = 10) {
    return getData({
        url: `/index/getSongListByType&album_id=${listType}&limit=${limit}`,
        method: 'get'
    })
}

/**
 * 根据推荐位获取歌曲列表
 */
export function getSongsByPosition(position = 0, limit = 10) {
    return getData({
        url: `/index/getSongListByType&position=${position}&limit=${limit}`,
        method: 'get'
    })
}

/**
 * 获取收藏的歌曲列表
 * @param uid
 * @returns {AxiosPromise}
 */
export function getFavoriteSongs(uid) {
    return getData({
        url: `/index/getFavoriteSongs`,
        method: 'get',
        params: {
            userId: uid
        }
    })
}