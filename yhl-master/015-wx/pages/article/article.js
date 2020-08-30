// pages/article/article.js
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
            {
                author:'Tom',
                avatar:'../images/avatar/1.jpg',
                time:'1天前',
                title:'文章1',
                mainImage:'../images/article/a1.jpg',
                desc:'文章描述',
                star:'20',
                view:'30'
            },
            {
                author:'age',
                avatar:'../images/avatar/2.jpg',
                time:'2天前',
                title:'文章2',
                mainImage:'../images/article/a2.jpg',
                desc:'文章描述',
                star:'20',
                view:'30'
            },
            {
                author:'tes',
                avatar:'../images/avatar/3.jpg',
                time:'2天前',
                title:'文章3',
                mainImage:'../images/article/a3.jpg',
                desc:'文章描述',
                star:'20',
                view:'30'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
    }
})