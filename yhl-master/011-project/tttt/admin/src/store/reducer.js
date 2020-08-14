//合并所有的reducer
import { combineReducers } from 'redux-immutable'

//从pages/todolist/store/index里面导出的是个对象所以花括号
import {reducer as todolistReducer} from 'pages/todolist/store/index.js'
import {reducer as loginReducer} from 'pages/login/store/index.js'
import {reducer as homeReducer} from 'pages/home/store/index.js'
import {reducer as userReducer} from 'pages/user/store/index.js'
import {reducer as categoryReducer} from 'pages/Category/store/index.js'
import {reducer as productReducer} from 'pages/product/store/index.js'
import {reducer as adReducer} from 'pages/ad/store/index.js'


export default combineReducers ({
	todolist:todolistReducer,
	login:loginReducer,
	home:homeReducer,
	user:userReducer,
	category:categoryReducer,
	product:productReducer,
    ad:adReducer,

})