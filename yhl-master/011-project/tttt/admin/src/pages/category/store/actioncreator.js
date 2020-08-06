import * as types from './actionType.js'
import { message } from 'antd'
import axios from 'axios'

import apiObj from 'api'





//处理新增分类
export const getAddCategoriesAction = (values)=>{
	return (dispatch,getState)=>{
		apiObj.addCategories(values)
		.then(result=>{
			// console.log(result)
			const data = result.data;
			if(data.code == 0){//登录成功
				message.success('添加分类成功!')
				dispatch(setLevelCategories(data.data))
			}else{//登录失败
				message.error(data.message)
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('请求失败,请稍后再试!!')
		})
	}
}
const setLevelCategories = (payload)=>({
	type:types.SET_LEVEL_CATEGORIES,
	payload
})

//处理获取最新父级分类
export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		apiObj.getLevelCategories({
			level:2
		})
		.then(result=>{
			const data = result.data;
			// console.log(data)
			if(data.code == 0){//登录成功
				dispatch(setLevelCategories(data.data))
			}else{//登录失败
				message.error(data.message)
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('请求失败,请稍后再试!!')
		})
	}
}















//处理分类列表分页数据
export const setPageAction = (val)=>({
	type:types.SET_PAGE,
	payload:val
})
export const getCategoriesStartAction = ()=>({
	type:types.REQUEST_START_ACTION
})
export const getCategoriesDoneAction = ()=>({
	type:types.REQUEST_DONE_ACTION
})


export const getPageAction =(page)=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch)=>{
        	//发送请求之前显示loding状态
			dispatch(getCategoriesStartAction())
        	apiObj.getCategoriesList({
        		page:page
        	})
        	.then(result=>{
				console.log(result)
				const data = result.data;
				if(data.code == 0){//登录成功
					//派发action将数据存到store中
					dispatch(setPageAction(data.data))
				}else{//登录失败
					message.error(data.message)
				}
			})
			.catch(err=>{
				console.log(err);
				message.error('请求失败,请稍后再试!!')
			})
			.finally(()=>{
			//无论请求成功或者失败取消loading状态
			dispatch(getCategoriesDoneAction())
			})
        }
        
}