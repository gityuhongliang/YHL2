require('pages/common/logo')
require('pages/common/footer')
require('./index.css');
var _util = require('util');


$(function(){
    // $('.register').show()
    //获取地址栏参数
    var type = _util.getParamsFromUrl('type') || 'default';
    //判断是否是订单支付成功页面
    if (type == 'payment') {
        var orderNo = _util.getParamsFromUrl('orderNo') || '';
        //返回被选元素的href属性值。
        var orderDetail = $('.order-detail').attr('href');
        //订单详情携带id的地址
        $('.order-detail').attr('href',orderDetail+orderNo)
    }
    $('.'+type).show();
})