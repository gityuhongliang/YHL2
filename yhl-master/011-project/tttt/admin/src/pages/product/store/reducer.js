import * as types from './actionType.js'

import { fromJS }  from 'immutable';

const defaultState = fromJS({
		
            list:[],
            total:0,
	        pageSize:0,
	        current:1,
            isFecthing:false,
            categories:[],
            //封面，图片，详情
            mainImage:'',
            images:'',
            detail:'',


            mainImageValidateStatus:"",
            mainImageHelp:"",
            imagesValidateStatus:"",
            imagesHelp:""

                   
})


//1.reducer是一个纯函数(有固定的输入就有固定的输出),主要功能用来处理业务数据
//2.reducer不能直接修改store传递过来的state，因为store中的state,只能由store进行管理，并且store中的state由所有组件所共享
//3.getstate方法所获取的始终是store中的state
//4.reducer修改完数据后会返回一个newState，store会根据这个newState修改自身的state


export default (state=defaultState,action)=>{
	// console.log('state',state)
	// console.log('action',action)
	

	// 处理商品列表
	if (action.type == types.SET_PAGE) {
		
		return state.merge({
			list:fromJS(action.payload.list),
			total:action.payload.total,
			pageSize:action.payload.pageSize,
			current:action.payload.current
		})

	}
	else if (action.type == types.REQUEST_START_ACTION) {
		return state.set('isFetching',true)
	}else if (action.type == types.REQUEST_DONE_ACTION) {
		return state.set('isFetching',false)
	}
	//处理设置分类数据
	else if (action.type == types.SET_LEVEL_CATEGORIES) {
		console.log(action.payload)
		return state.set('categories',fromJS(action.payload))
	}

	//处理自定义组件存值
	else if (action.type == types.SET_MAIN_IMAGE) {
		return state.set('mainImage',action.payload)
	}
	else if (action.type == types.SET_IMAGES) {
		return state.set('images',action.payload)
	}
	else if (action.type == types.SET_DETAI) {
		return state.set('values',action.payload)
	}
	return state
}