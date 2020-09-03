// pages/movie/movie-more/movie-more.js
const { getMovieList } = require ('../../../utils/util.js')
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        requestUrl:''
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
        var navigationBarTitle =''
        if(type == 'inTheaters'){
            requestUrl = baseUrl + 'in_theaters?start=2'
            navigationBarTitle = '正在热映'
        }
        else if(type == 'comingSoon'){
            requestUrl = baseUrl + 'coming_soon?start=2'
            navigationBarTitle = '即将上映'
        }
        else if(type == 'top250'){
            requestUrl = baseUrl + 'top250?start=5'
            navigationBarTitle = '豆瓣Top250'
        }
        this.setData({requestUrl:requestUrl})
        // 动态设置当前页面的标题
        wx.setNavigationBarTitle({
            title: navigationBarTitle
        })
        // 在当前页面显示导航条加载动画
        wx.showNavigationBarLoading()
        // 发送请求获取电影列表
        // getMovieList(requestUrl,function(data){
        //     _this.setData({movies:data},function(){
        //         // 在当前页面隐藏导航条加载动画
        //         wx.hideNavigationBarLoading()
        //     })
        // })
        getMovieList(requestUrl,this.handleMovieList)
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
        var _this = this 
        // 在当前页面显示导航条加载动画
        wx.showNavigationBarLoading()
        // 发送请求获取电影列表
        // getMovieList(this.data.requestUrl,function(data){
        //     _this.setData({movies:data},function(){
        //         // 在当前页面隐藏导航条加载动画
        //         wx.hideNavigationBarLoading()
        //     })
        // })
        getMovieList(this.data.requestUrl,this.handleMovieList)
    },

    handleMovieList:function(data){
        this.setData({movies:data},function(){
            // 在当前页面隐藏导航条加载动画
            wx.hideNavigationBarLoading()
        })
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