//合并所有的reducer
import { combineReducers } from 'redux-immutable'

//从pages/todolist/store/index里面导出的是个对象所以花括号
import {reducer as todolistreducer} from 'pages/todolist/store/index.js'
import {reducer as loginreducer} from 'pages/login/store/index.js'
import {reducer as homereducer} from 'pages/home/store/index.js'
import {reducer as userreducer} from 'pages/user/store/index.js'
import {reducer as categoryreducer} from 'pages/Category/store/index.js'


export default combineReducers ({
	todolist:todolistreducer,
	login:loginreducer,
	home:homereducer,
	user:userreducer,
	category:categoryreducer

})