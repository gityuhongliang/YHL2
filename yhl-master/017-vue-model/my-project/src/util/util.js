
//保存用户状态信息
export const saveUsername = (username)=>{
	return window.localStorage.setItem('username',username)
}
//获取用户状态信息
export const getUsername = ()=>{
	return window.localStorage.getItem('username');
}
//删除用户状态信息
export const removeUsername = ()=>{
	return window.localStorage.removeItem('username');
}