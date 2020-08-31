// pages/article/article.js

const { articles } = require('../../db/index.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        /*
        text:'txt',
        array: [
            {
                message: 'leo',
            }, 
            {
                message: 'Tom'
            }
        ],
        */
        articles:[
            
        ]
    },

    /**require
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       //初始化data数据模块化后require引进来
        this.setData({articles:articles},function(){
            // console.log('2:',this.data)
        })
        // console.log('1:',this.data)
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

    },
    onPageScroll: function() {
      // 页面滚动时执行
    },
    onResize: function() {
      // 页面尺寸变化时执行
    },
    onTabItemTap(item) {
      // tab 点击时执行
      console.log(item.index)
      console.log(item.pagePath)
      console.log(item.text)
    },
    //点击文章跳转到文章详情
    tapArticleDetail:function(ev){
        // console.log(ev)
        // console.log(ev.currentTarget.dataset.articleId)
        var articleId = ev.currentTarget.dataset.articleId
        wx.navigateTo({
          url: '/pages/article/article-detail/article-detail?articleId=' + articleId,
        })
    }
})