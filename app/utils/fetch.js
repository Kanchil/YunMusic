/**
 * 功能说明：封装请求
 */
import axios from 'axios'
import config from '../config'

// 创建axios实例
const service = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    },
    timeout: 20000                  // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    console.log(config, 'config')
    return config
}, error => {
    // Do something with request error
    Promise.reject(error)
})
service.interceptors.response.use(
    respond => {
        console.log(respond, 'response')
        let res = respond.data
        switch (res.errorCode) {
            case 200:
                if (typeof res.data === 'object') {
                    return Promise.resolve(res.data)
                }
                try {
                    let data = JSON.parse(res.data)
                    return Promise.resolve(data)
                } catch (e) {
                    throw e
                }
                break;
        }
        let err = new Error('异常')
        err.message = res.message
        err.response = res
        console.log(err, 'err')
        throw err
    },
    error => {
        console.log(error, 'error')
        throw error
        // 这里添加提示信息
        return Promise.reject(error)
    }
)
export default service
