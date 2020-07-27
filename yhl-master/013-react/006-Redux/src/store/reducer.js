


const defaultState ={
		
            list:['吃饭','吃饭','吃饭'],
            task:''
        
}

export default (state=defaultState,action)=>{
	// console.log('state',state)
	// console.log('action',action)
	if (action.type == 'change_item') {
		state.task = action.payload;
	}
	return state
}