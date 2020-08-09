import * as types from './actionType.js'
import { message } from 'antd'
import axios from 'axios'

import apiObj from 'api'




//处理新增或者编辑商品


const setMainImageErrAction = ()=>({
	type:types.SET_MAIN_IMAGE_ERR,
})
const setImageErrAction = ()=>({
	type:types.SET_IMAGES_ERR,
})

export const getSaveProductAction = (err,values)=>{
	return (dispatch,getState)=>{
		// console.log(values)
		const getValues = getState().get('product')
		const mainImage = getValues.get('mainImage')
		const images = getValues.get('images')
		const detail = getValues.get('detail')
		let hasErr = false;
		if(err){//如果有错误从err传过来，判断haserr为true
			hasErr = true;
		}
		//自定义组件验证
		if(!mainImage){
			hasErr = true;
			dispatch(setMainImageErrAction())
		}
		if (!images) {
			dispatch(setImageErrAction())
			hasErr = true;
		}

		if (hasErr) {
			return //停止
		}

		//验证通过，发送请求
        //判断是新增还是编辑商品，根据values是否了传递id
        let request = apiObj.addProducts
        if (values.id) {
             request =apiObj.updateProducts
        }



		request({
			...values,
			mainImage,
			images,
			detail,
		})
		.then(result=>{
			const data = result.data;
			console.log(data)
			if(data.code == 0){//登录成功
				message.success(data.message,()=>{
					window.location.href='/product'
				})
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

//处理获取最新商品分类
export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		apiObj.getLevelCategories({
			level:3
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



//处理商品列表分页数据
export const setPageAction = (val)=>({
	type:types.SET_PAGE,
	payload:val
})
export const getProductsStartAction = ()=>({
	type:types.REQUEST_START_ACTION
})
export const getProductsDoneAction = ()=>({
	type:types.REQUEST_DONE_ACTION
})


export const getPageAction =(page)=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch)=>{
        	//发送请求之前显示loding状态
			dispatch(getProductsStartAction())
        	apiObj.getProductsList({
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
			dispatch(getProductsDoneAction())
			})
        }
        
}

//处理自定义组件存值到store

export const getMainImagesAction =(mainImage)=>({
	type:types.SET_MAIN_IMAGE,
	payload:mainImage
})
export const getImagesAction =(images)=>({
	type:types.SET_IMAGES,
	payload:images
})
export const getDetailAction =(values)=>({
	type:types.SET_DETAI,
	payload:values
})



//处理更新是否首页显示
export const getUpdateIsShowAction =(id,newIsShow)=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch,getState)=>{
        	// 处理更新分类名称后返回第一页
        	const page = getState().get('product').get('current')
        	//发送请求之前显示loding状态
			dispatch(getProductsStartAction())
        	apiObj.updateProductsIsShow({
        		id:id,
        		isShow:newIsShow,
        		page:page

        	})
        	.then(result=>{
				console.log(result)
				const data = result.data;
				if(data.code == 0){//登录成功
					message.success('更新是否首页显示成功')
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
			dispatch(getProductsDoneAction())
			})
        }
        
}
//处理更新上架/下架
export const getUpdateStatusAction =(id,newStatus)=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch,getState)=>{
        	// 处理更新分类名称后返回第一页
        	const page = getState().get('product').get('current')
        	//发送请求之前显示loding状态
			dispatch(getProductsStartAction())
        	apiObj.updateProductsStatus({
        		id:id,
        		status:newStatus,
        		page:page

        	})
        	.then(result=>{
				console.log(result)
				const data = result.data;
				if(data.code == 0){//登录成功
					message.success('更新上架下架成功')
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
			dispatch(getProductsDoneAction())
			})
        }
        
}
//处理更新是否热卖
export const getUpdateIsHotAction =(id,newIsHot)=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch,getState)=>{
        	// 处理更新分类名称后返回第一页
        	const page = getState().get('product').get('current')
        	//发送请求之前显示loding状态
			dispatch(getProductsStartAction())
        	apiObj.updateProductsIsHot({
        		id:id,
        		isHot:newIsHot,
        		page:page

        	})
        	.then(result=>{
				console.log(result)
				const data = result.data;
				if(data.code == 0){//登录成功
					message.success('更新是否热卖成功')
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
			dispatch(getProductsDoneAction())
			})
        }
        
}
//处理更新排序
export const getUpdateOrderAction =(id,newOrder)=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch,getState)=>{
        	// 处理更新分类名称后返回第一页
        	const page = getState().get('product').get('current')
        	//发送请求之前显示loding状态
			dispatch(getProductsStartAction())
        	apiObj.updateProductsOrder({
        		id:id,
        		order:newOrder,
        		page:page

        	})
        	.then(result=>{
				console.log(result)
				const data = result.data;
				if(data.code == 0){//登录成功
					message.success('更新排序成功')
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
			dispatch(getProductsDoneAction())
			})
        }
        
}







const setProductDetailAction =(values)=>({
	type:types.SET_PRODUCT_DETAI,
	payload:values
})

//处理获取商品详情

export const getProductDetailAction =(id)=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch,getState)=>{
        	apiObj.getProductsDetail({
        		id:id,
        	})
        	.then(result=>{
				console.log(result)
				const data = result.data;
				if(data.code == 0){//登录成功
					//派发action将数据存到store中
					dispatch(setProductDetailAction(data.data))
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