/*
* @Author: Chen
* @Date:   2019-12-02 16:52:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-03 17:45:26
*/
import axios from 'axios'
import * as types from './actionTypes.js'
import { message } from 'antd'
import { saveUsername } from '../../../util/index.js'
export const getChangeItemAction = (val)=>({
	type:types.CHANGE_ITEM,
	payload:val
})



const error = () => {
  	message.error()
}
export const getLoginAction = (data)=>{
	return (dispatch,getState)=>{
		
		data.role ='admin'
		axios({
			method:'post',
			url:'http://127.0.0.1:3000/sessions/users',
			data:data
		})
		.then(result=>{
			// console.log(result)
			//派发action
			const data = result.data;
			if(data.code == 0){
				//1.将用户信息保存在前台
				saveUsername(data.data.username)
				//2.登录成功回到后台管理页面
				// window.location.href ='/'
			}else{
				message.error(data.message)
			}
		})
		.catch(err=>{
			console.log(err)
		})
	}
}
