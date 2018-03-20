import getData from '../../utils/fetch';

export function login(param){
    return getData({
        url: `api.php?s=/index/login`,
        method: 'post',
        data: {
            ...param
        }
    })
}

export function register(param){
    return getData({
        url: `api.php?s=/index/register`,
        method: 'post',
        data: {
            ...param
        }
    })
}