import * as types from './actionType.js'

import { fromJS }  from 'immutable';

const defaultState = fromJS({
		
            list:[],
            total:0,
	        pageSize:0,
	        current:1,
            isFecthing:false          
                   
})


//1.reducer是一个纯函数(有固定的输入就有固定的输出),主要功能用来处理业务数据
//2.reducer不能直接修改store传递过来的state，因为store中的state,只能由store进行管理，并且store中的state由所有组件所共享
//3.getstate方法所获取的始终是store中的state
//4.reducer修改完数据后会返回一个newState，store会根据这个newState修改自身的state


export default (state=defaultState,action)=>{
	// console.log('state',state)
	// console.log('action',action)
	if (action.type == types.SET_PAGE) {
		
		return state.merge({
			list:fromJS(action.payload.list),
			total:action.payload.total,
			pageSize:action.payload.pageSize,
			current:action.payload.current
		})

	}
	else if (action.type == types.Counts_START_ACTION) {
		return state.set('isFetching',true)
	}else if (action.type == types.Counts_DONE_ACTION) {
		return state.set('isFetching',false)
	}
	return state
}