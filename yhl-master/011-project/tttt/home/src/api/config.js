const API_CONFIG = {
    //登录注册
    login:                      ['/sessions/users','post'],
    getUsername:                ['/sessions/username','get'],
    //退出
    logout:                     ['/sessions/users','delete'],
    register:                   ['/users','post'],

    //个人中心
    checkUsername:              ['/users/checkUsername','get'],
    getUserInfo:                ['/sessions/users','get'],
    updatePassword:             ['/users','put'],

    //首页加载数据
    getHomeCategories:          ['/categories/homeCategories','get'],
    getHomeAds:                 ['/ads/positionAds','get'],
    getHomeFloors:              ['/floors','get'],
    //列表页
    getProductsList:            ['/products/list','get'],
    // 详情页
    getProductsDetail:          ['/products/detail','get'],
    //添加购物车
    addCarts:                   ['/carts','post'],
    //获取购物车数量
    getCartsCount:              ['/carts/count','get'],
    //获取购物车信息
    getCarts:                   ['/carts','get'],
    //更新购物车选中状态
    updateCartsChoice:          ['/carts/choices','put'],
    //删除购物车单个商品
    deleteCarts:                ['/carts','delete'],
    //更新购物车商品数量
    updateCartsCounts:          ['/carts/counts','put'],
    //订单确认页面
    //商品清单
    getOrdersList:              ['/orders/products','get'],
    //新增地址
    addShippings:               ['/shippings','post'],
    //获取地址列表
    getShippingsList:           ['/shippings/list','get'],
    //删除地址
    deleteShippings:            ['/shippings','delete'],
    //编辑地址
    getShippingsDetail:         ['/shippings/detail','get'],
    //更新编辑新增的地址
    updateShippingsDetail:      ['/shippings','put'],
    //创建订单
    addOrders:                  ['/orders','post'],
    //支付
    getPayments:                ['/payments','get'],
    //监听订单支付状态
    getPaymentStatus:           ['/payments/status','get'],
    
    


}
module.exports = {
    API_CONFIG
}