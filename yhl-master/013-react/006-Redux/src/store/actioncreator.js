import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,LOAD_DATA} from './actionType.js'



export const getChangeItemAction = (val)=>({
	type:CHANGE_ITEM,
    payload:val
})
export const getAddItemAction = ()=>({
	type:ADD_ITEM,
})
export const getDelItemAction = (index)=>({
	type:DEL_ITEM,
    payload:index
})

export const getLoadDataAction = (data) =>({
	type:LOAD_DATA,
	payload:data
})