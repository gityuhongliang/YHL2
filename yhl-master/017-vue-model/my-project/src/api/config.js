var API_CONFIG = {
    getHomeAds:             ['/ads/positionAds', 'get'],
    getHomeFloors:          ['/floors', 'get'],
    getHomeCategories:      ['/categories/arrayCategories', 'get'],

    getSortCategories:      ['/categories/childArrayCategories/', 'get'],

    getProductsList:        ['/products/list/', 'get'],
    getProductsDetail:      ['/products/detail', 'get'],

    getUserCaptcha:         ['/users/captcha', 'get'],
    Login:                  ['/users/login', 'post'],
}

module.exports = {
    API_CONFIG
}