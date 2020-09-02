// pages/movie/movie-more/movie-more.js
const { getMovieList } = require ('../../../utils/util.js')
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this 
        //拿到传过来的type
        var type = options.type
        //获取请求地址，数据
        var baseUrl=app.GLOBAL_DATA.baseUrl
        var requestUrl = ''
        if(type == 'inTheaters'){
            requestUrl = baseUrl + 'in_theaters'
        }
        else if(type == 'comingSoon'){
            requestUrl = baseUrl + 'coming_soon'
        }
        else if(type == 'top250'){
            requestUrl = baseUrl + 'top250'
        }
        // 发送请求获取电影列表
        getMovieList(requestUrl,function(data){
            _this.setData({movies:data})
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})