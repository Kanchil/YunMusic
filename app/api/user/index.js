import getData from '../../utils/fetch';

/**
 * 登录
 * @param param
 * @return {AxiosPromise}
 */
export function login(param) {
    return getData({
        url: `/index/login`,
        method: 'post',
        data: param
    })
}

/**
 * 注册
 * @param param
 * @return {AxiosPromise}
 */
export function register(param) {
    return getData({
        url: `/index/register`,
        method: 'post',
        data: param
    })
}

/**
 * 判断是否已收藏
 * @returns {AxiosPromise}
 */
export function isFavoriate(param) {
    return getData({
        url: '/index/isFavoriate',
        method: 'get',
        params: param
    })
}

/**
 * 收藏歌曲
 * @param param
 * @returns {AxiosPromise}
 */
export function favoriteSong(param) {
    return getData({
        url: '/index/favoriteSong',
        method: 'get',
        params: param
    })
}

/**
 * 取消收藏
 * @param param
 * @returns {AxiosPromise}
 */
export function cancelFavorite(param) {
    return getData({
        url: '/index/cancelFavorite',
        method: 'get',
        params: param
    })
}