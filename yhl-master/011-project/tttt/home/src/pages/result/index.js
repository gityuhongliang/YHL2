require('pages/common/logo')
require('pages/common/footer')
require('./index.css');
var _util = require('util');


$(function(){
    // $('.register').show()
    //获取地址栏参数
    var type = _util.getParamsFromUrl('type') || 'default';
    $('.'+type).show();
})