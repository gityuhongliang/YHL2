var modalTpl = require('./modal.tpl');
var _city = require('util/city')
var _util = require('util')
var api = require('api');

var formDataMsg = {
    show:function(msg){
        $('.error-item')
        .show()
        .find('.error-msg')
        .text(msg)
    },
    hide:function(){
        $('.error-item')
        .hide()
        .find('.error-msg')
        .text('')
    }
}


module.exports = {
    show:function(shipping){
        //缓存编辑地址需要回填的数据
        this.shipping = shipping
        //事件代理
        this.modalBox = $('.modal-box');
        //加载新增地址弹出输入框
        this.loadModal()
        //监听事件
        this.bindEvent()
        //加载省份
        this.loadProvinces()

    },
    getSelectOption:function(arr){
        var html = '<option value="">请选择</option>'
            for(var i=0; i<arr.length;i++){
                html +='<option value="'+arr[i] +'">'+arr[i]+'</option>'
            }
        return html
    },
    loadProvinces:function(){
        //加载省份信息调用封装方法
        var provinces = _city.getProvinces('')
        //调用方法for循环生成下拉列表省份数据
        var provincesgetSelectOptions = this.getSelectOption(provinces)
        //找到需要要生成信息列表的父元素
        var provincesSelect= this.modalBox.find('.province-select')
        //给父元素生成html
        provincesSelect.html(provincesgetSelectOptions)

        //处理编辑地址省份回填
        if (this.shipping) {
        //如果你有回填的数据那么val等于回填获取到的数据里的省份
            provincesSelect.val(this.shipping.province)
        // 调用loadcites方法加载城市信息
            this.loadCities(this.shipping.province)
        }
    },
    loadCities:function(province){
        //加载市级信息
        var cities = _city.getCities(province)
        //调用方法for循环生成下拉列表市级数据
        var citiesgetSelectOptions = this.getSelectOption(cities)
        //找到需要要生成信息列表的父元素
        var citiesSelect= this.modalBox.find('.city-select')
        //给父元素生成html
        citiesSelect.html(citiesgetSelectOptions)

        //处理编辑地址城市回填
        if (this.shipping) {//如果你有回填的数据那么val等于回填获取到的数据里的城市
            citiesSelect.val(this.shipping.city)
        }
    },
    loadModal:function(data){
        var html = _util.render(modalTpl,this.shipping)
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
       //2.监听事件根据选中的省份信息加载具体城市信息
        this.modalBox.on('change','.province-select',function(ev){
            // console.log(this.value)
            var province = $(this).val()
            _this.loadCities(province)
       })
        //3.点击提交新增地址数据
        this.modalBox.find('#btn-submit').on('click',function(){
            _this.submit();
        })
        //监听键盘事件提交表单

        $('input').on('keydown',function(ev){
            if(ev.keyCode == 13){ 
                _this.submit()
            }
        })

    },
    hideModal:function(){
        this.modalBox.empty()
    },
    //把提交表单的方法抽取出去
    submit:function(){
        var _this = this
        //1.获取数据
        //存到一个对象里面
        var formData = {
            name:$.trim($('[name="name"]').val()),
            province:$.trim($('[name="province"]').val()),
            city:$.trim($('[name="city"]').val()),
            address:$.trim($('[name="address"]').val()),
            phone:$.trim($('[name="phone"]').val()),
            zip:$.trim($('[name="zip"]').val()),
        }
        //2.验证数据合法性
        var validateFormData = this.validate(formData)
        //3.验证通过发送请求
        if (validateFormData.status) {
            //隐藏错误提示
            formDataMsg.hide()
            //发送ajax请求
            
            var action = '新增'
            var request = api.addShippings
            if (_this.shipping) {
                request = api.updateShippingsDetail
                formData.id = _this.shipping._id
                action = '编辑'
            }
            request({
                data:formData,
                success:function(data){
                    //1.关闭新增地址输入框
                    _this.hideModal()
                    //2.更新渲染地址列表
                    //自定义事件
                    $('.shipping-box').trigger('get-shippings',[data])
                    //3.新增地址成功提示
                    _util.showSuccessMsg(action+'地址成功')               
                },
                error:function(msg){
                    formDataMsg.show('新增地址失败，请稍后再试');
                }
            })
            
        }else{
            formDataMsg.show(validateFormData.msg);
            
        }
    },
    validate:function(formData){
        var result = {
            status:false,
            msg:''
        }
        //用户名非空验证
        if(!_util.validate(formData.name,'required')){
            result.msg = '请输入用户名'
            return result
        }
        //省份非空验证
        if(!_util.validate(formData.province,'required')){
            result.msg = '请选择省份'
            return result
        }
        //城市非空验证
        if(!_util.validate(formData.city,'required')){
            result.msg = '请选择城市'
            return result
        }
        //地址非空验证
        if(!_util.validate(formData.address,'required')){
            result.msg = '请填写详细地址'
            return result
        }
        //手机号非空验证
        if(!_util.validate(formData.phone,'required')){
            result.msg = '请输入手机号'
            return result
        }
        //手机号合法性验证
        if(!_util.validate(formData.phone,'phone')){
            result.msg = '手机号格式不正确'
            return result
        }
        //邮箱非空验证
        if(!_util.validate(formData.zip,'required')){
            result.msg = '请输入正确邮箱地址'
            return result
        }
       
        result.status = true
        return result
    }
}