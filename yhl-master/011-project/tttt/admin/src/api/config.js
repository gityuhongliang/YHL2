
export const SERVER = 'http://127.0.0.1:3000'

export const UPLOAD_IMAGES = SERVER + '/products/images'

export const UPLOAD_DETATL_IMAGES = SERVER + '/products/detailImages'

export const UPLOAD_AD_IMAGE = SERVER + '/ads/image'

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
	addProducts:              ['/products','post'],
	getProductsList:          ['/products/list','get'],
	updateProductsIsShow:     ['/Products/isShow','put'],
	updateProductsIsHot:      ['/Products/isHot','put'],
	updateProductsOrder:      ['/Products/order','put'],
	updateProductsStatus:     ['/Products/status','put'],
	getProductsDetail:     	  ['/Products/detail','get'],

	//编辑商品
	updateProducts:           ['/products','put'],
	//广告api
	getAdsList:                ["/ads/list","get"],
    getAdsDetail:              ["/ads/detail","get"],
    addAds:                    ["/ads","post"],
    updateAds:                 ["/ads","put"],
    updateAdsOrder:            ["/ads/order","put"],
    updateAdsIsShow:           ["/ads/isShow","put"],
}