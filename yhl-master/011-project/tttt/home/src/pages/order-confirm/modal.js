var modalTpl = require('./modal.tpl');
var _city = require('util/city')
var _util = require('util')
module.exports = {
    show:function(){
        //事件代理
        this.modalBox = $('.modal-box');
        //加载新增地址弹出输入框
        this.loadModal()
        //监听事件
        this.bindEvent()
        //加载省份
        console.log(_city.getProvinces(''));
        console.log(_city.getCities('河南省'))

    },
    loadModal:function(data){
        var html = _util.render(modalTpl)
         this.modalBox.html(html)
    },
    bindEvent:function(){
        var _this = this 
        //1.点击关闭按钮关闭弹出新增地址输入框
       this.modalBox.on('click','.close',function(ev){
            _this.hideModal()
       })
       this.modalBox.on('click','.modal-container',function(ev){
        //阻止事件冒泡防止点击表单时关闭新增地址输入框
            ev.stopPropagation()
           
       })
    },
    hideModal:function(){
        this.modalBox.empty()
    }
}