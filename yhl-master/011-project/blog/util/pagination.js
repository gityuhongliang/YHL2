/*
	options ={
		page:当前显示的页码，
		model:查询集合的名称，
		query：查询条件，
		projection：投影，
		sort：排序,
		populates:关联查询
	}
*/

async function pagination(options){
	// 分页：具体显示哪一页page从前台发送
	//每一页显示几条数据limit = 4
	// 第一页显示1-4 skip (1-1)*4
	// 第二页显示5-8 skip (2-1)*4
	// 第三页显示9-12  skip (3-1)*4
	let { page,model,query,projection,sort,populates } = options
	const limit = 4
	if(isNaN(page)){
		page = 1
	}
	// 边界控制
	if(page == 0){
		page = 1
	}
	//跳过几条
	let skip =(page - 1)*limit

	
	//拿到数据库有多少条数据
	 const counts = await model.countDocuments(query)
		let pages = Math.ceil(counts/limit)		
		//生成页码
		let list = []
		for(let  i = 1; i<=pages;i++){
			list.push(i)
		}
		//下一页边界控制
		if (page > pages) {
			page = pages
		}
		if(page = 0){
			page = 1
		}
		//关联查询
		let result = model.find(query,projection)
		if(populates){
			populates.forEach(function(populate){
				result =result.populate(populate)
			})
		}
		//查询数据库获取用户信息
		const docs = await result
		.skip(skip)
		.limit(limit)
		.sort(sort)
		
		return{
			docs:docs,
			page:page,
			list:list,
			pages:pages
		}
}

module.exports = pagination