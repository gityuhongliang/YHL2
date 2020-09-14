import { API_CONFIG } from './config.js'
import axios from 'axios'
const getApiObj = (API_CONFIG) => {
    const apiObj = {}
    for (let key in API_CONFIG) { //循环遍历拿到API_CONFIG上对象上的方法
        apiObj[key] = (data) => {
            //地址
            let url = API_CONFIG[key][0] || '/'
            //方法
            let method = API_CONFIG[key][1] || 'get'
            //发送请求到后台
            return request(url, method, data)
        }
    }

    return apiObj
}
const request = (url, method, data) => {
    //需要用promise方法
    return new Promise((resolve, reject) => {
        const options = {
            method: method,
            url: url,
            withCredentials: true//携带cookies
        }
        //axios携带参数get,delete得用params
        switch (method.toUpperCase()) {
            case 'GET':
            case 'DELETE':
                options.params = data
                break
            default:
                options.data = data
        }
        axios(options)
            .then(result => {
                // console.log(result)
                //为了解决后台session过期或者通过某种方式主动清除后台session
                //需要重新登录前后台状态要保持一致
                if (result.data.code == 10) {//等于后台清掉了或者未登录
                    //1.清除前台用户状态
                    // removeUsername()
                    //2.返回登录页面
                    window.location.href = '/login'
                    reject('请求失败,没有权限')
                }
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default getApiObj(API_CONFIG)