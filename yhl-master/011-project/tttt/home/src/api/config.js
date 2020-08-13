const API_CONFIG = {
    //登录注册
    login:                      ['/sessions/users','post'],
    getUsername:                ['/sessions/username','get'],
    logout:                     ['/sessions/users','delete'],
    register:                   ['/users','post'],

    //个人中心
    checkUsername:              ['/users/checkUsername','get'],
    getUserInfo:                ['/sessions/users','get'],
    updatePassword:             ['/users','put'],
}
module.exports = {
    API_CONFIG
}