
export const SERVER = 'http://127.0.0.1:3000'

export const UPLOAD_IMAGES = SERVER + '/products/images'

export const UPLOAD_DETATL_IMAGES = SERVER + '/products/detailImages'

export const API_CONFIG  = {
	login:                    ['/sessions/users','post'],//路径，方法
	logout:                   ['/sessions/users','delete'],

	//用户列表
	getCounts:                ['/counts','get'],
	getUserList:              ['/users/list','get'],
	//分类管理
	addCategories:            ['/categories','post'],
	getLevelCategories:       ['/categories/levelCategories','get'],
	getCategoriesList:        ['/categories/list','get'],
	updateCategoriesName:     ['/categories/name','put'],
	updateMobileName:         ['/categories/mobileName','put'],
	updateOrder:              ['/categories/order','put'],
	updateIsShow:             ['/categories/isShow','put'],

	//新增商品
	addProducts:              ['/aproducts','post'],

}