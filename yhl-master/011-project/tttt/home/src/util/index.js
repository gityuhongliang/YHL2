import Hogan from 'hogan.js';

module.exports = {
    validate :function(value,type){
        //非空验证
        if (type == 'required') {
            return !!value
        }
        //用户名验证
        else if(type == 'username'){
            return /^[a-zA-Z][a-zA-Z0-9_]{3,8}$/.test(value)
        }
        //密码验证
        else if(type == 'password'){
            return /^[a-zA-Z]\w{3,8}$/.test(value)
        }
        //手机号验证
        else if(type == 'phone'){
            return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)
        }
        // 邮箱验证
        else if(type == 'email'){
            return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
        }
    },
    //封装的显示成功信息方法
    showSuccessMsg:function(msg){
        alert(msg)
    },
    //封装的显示失败信息方法
    showErrMsg:function(msg){
        alert(msg)
    },
    //封装弹出确认信息方法
    showConfirmMsg:function(msg){
        return window.confirm(msg)
    },
    goLogin:function(){
        //共通未登录返回登录界面  同时在后面返回上一页地址的参数
        window.location.href = '/user-login.html?redirect='+window.location.href
    },
    //封装用于获取类型参数方法 只能携带一个参数
    goResult:function(type){
         window.location.href ='/result.html?type='+type
    },
    getParamsFromUrl:function(keyword){
        //获取地址栏参数信息
        var query = window.location.search.substr(1)
        //type=register
        //type=register&name=tom
        //name=tom&type=register
        //name=tom&type=register&age=18
        var reg = new RegExp('(^|&)'+keyword+'='+'([^&]*)($|&)');
        var result = query.match(reg);
        return result ? decodeURIComponent(result[2]) : null  //解码
    },
    //封装生成html模板方法
    render:function(tpl,data){
        var template = Hogan.compile(tpl)
        var html = template.render(data);
        return html
    }

}