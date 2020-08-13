require('./index.css');

var _util = require('util')
var api = require('api');

var page ={
    init:function(){
        //加载登录用户名字
        this.loadUsername()
        //绑定退出事件
        this.bindEventg()
    },
    bindEventg:function(){
        $('#logout').on('click',function(){
             api.logout({//发送清空用户状态信息
                success:function(result){//刷新一下
                    window.location.reload()
                },
                error:function(msg){
                    _util.showErrMsg(msg)
                }
            })
        })
    },
    loadUsername:function(){
        api.getUsername({
            success:function(result){
                $('.not-login').hide()
                $('.login')
                .show()
                .find('.username')
                .text(result.username)
            }
        })
        /*
       $.ajax({
            url:'/sessions/username',
            method:'get',
            dataType:'json',
            success:function(result){
                $('.not-login').hide()
                $('.login')
                .show()
                .find('.username')
                .text(result.data.username)
            }
        })
        */
    }
}


$(function(){
    page.init()
})