// pages/movie/movie-more/movie-more.js
const { getMovieList } = require ('../../../utils/util.js')
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        requestUrl:'',
        totalCount:0,
        totalData:[],
        isEnd:false
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
            requestUrl = baseUrl + 'in_theaters'
            navigationBarTitle = '正在热映'
        }
        else if(type == 'comingSoon'){
            requestUrl = baseUrl + 'coming_soon'
            navigationBarTitle = '即将上映'
        }
        else if(type == 'top250'){
            requestUrl = baseUrl + 'top250'
            navigationBarTitle = '豆瓣Top250'
        }

        //保存当前请求地址
        this.setData({requestUrl:requestUrl})

        // 动态设置当前页面的标题
        wx.setNavigationBarTitle({
            title: navigationBarTitle
        })

        // 在当前页面显示导航条加载Loading动画
        wx.showNavigationBarLoading()
        // 发送请求获取电影列表
        // getMovieList(requestUrl,function(data){
        //     _this.setData({movies:data},function(){
        //         // 在当前页面隐藏导航条加载Loading动画
        //         wx.hideNavigationBarLoading()
        //     })
        // })
        getMovieList(requestUrl,this.handleMovieList)
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        var _this = this 
        // 在当前页面显示导航条加载Loading动画
        wx.showNavigationBarLoading()
        // 发送请求获取电影列表
        // getMovieList(this.data.requestUrl,function(data){
        //     _this.setData({movies:data},function(){
        //         // 在当前页面隐藏导航条加载Loading动画
        //         wx.hideNavigationBarLoading()
        //     })
        // })
        getMovieList(this.data.requestUrl,this.handleMovieList)
    },

    handleMovieList:function(data){
        //判断数据是否还有
        if(data.length == 0){
            wx.showToast({
                title:'已经到底了' ,
                duration: 2000
            })
            // 在当前页面隐藏导航条加载Loading动画
            wx.hideNavigationBarLoading()

            //给下面上拉加载电影是否触底判断
            this.data.isEnd = true
            return
        }
        //定义每次下拉加载数据的起始条数
        this.data.totalCount = this.data.totalCount + data.length
        //将最新加载出的电影列表和之前的列表合并使其共存
        this.data.totalData = this.data.totalData.concat(data)
        this.setData({movies:this.data.totalData},function(){
            // 在当前页面隐藏导航条加载Loading动画
            wx.hideNavigationBarLoading()
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     * 加载更多电影
     */
    onReachBottom: function () {
        // 在当前页面显示导航条加载Loading动画
        wx.showNavigationBarLoading()
        //判断是否触底没有数据了阻止加载
        if(this.data.isEnd){
            // 在当前页面隐藏导航条加载Loading动画
            wx.hideNavigationBarLoading()
            return
        }
        console.log(this.data.totalCount)
        var nextUrl = this.data.requestUrl + '?start=' + this.data.totalCount + '&count=20'
        getMovieList(nextUrl,this.handleMovieList)
    },
})