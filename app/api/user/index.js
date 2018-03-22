import getData from '../../utils/fetch';

/**
 * 登录
 * @param param
 * @return {AxiosPromise}
 */
export function login(param) {
    return getData({
        url: `api.php?s=/index/login`,
        method: 'post',
        data: {
            ...param
        }
    })
}

/**
 * 注册
 * @param param
 * @return {AxiosPromise}
 */
export function register(param) {
    return getData({
        url: `api.php?s=/index/register`,
        method: 'post',
        data: {
            ...param
        }
    })
}