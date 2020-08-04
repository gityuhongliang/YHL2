//目标 导出一个对象:对象的属性就是方法名,值就是对应的方法
import { SERVER,API_CONFIG } from 'api/config.js'
import axios from 'axios'
import { message } from 'antd'
import { removeUsername } from 'util'
const getApiConfig = (API_CONFIG) =>{
	const apiObj = {}
	for(let key in API_CONFIG){ //循环遍历拿到API_CONFIG上对象上的方法
		apiObj[key] = (data)=>{
			//地址
			let url = SERVER + API_CONFIG[key][0]  || '/';
			//方法
			let method = API_CONFIG[key][1]  || 'get';
			//发送请求到后台
			return request(url,method,data)
		}
	}

	return apiObj

}

const request = (url,method,data) =>{
	//需要用promise方法
	return new Promise((resolve,reject)=>{
		const options = {
			method:method,
			url:url,
			data:data,
			withCredentials:true//携带cookies
		}
		axios(options)
		.then(data=>{
			// console.log(data)
			//为了解决后台session过期或者通过某种方式主动清除后台session
			//需要重新登录前后台状态要保持一致
			if (data.data.code == 10) {//等于后台清掉了或者未登录
				//1.清除前台用户状态
				removeUsername()
				//2.返回登录页面
				window.location.href ='/login'
				reject(message.error('获取数据失败,没有权限'))
			}
			resolve(data)
		})
		.catch(err=>{
			reject(err)
		})
	})

}


export default getApiConfig(API_CONFIG)