//合并所有的reducer
import { combineReducers } from 'redux'

//从pages/todolist/store/index里面导出的是个对象所以花括号
import {reducer as todolistreducer} from '../pages/todolist/store/index.js'

export default combineReducers ({
	todolist:todolistreducer 
})