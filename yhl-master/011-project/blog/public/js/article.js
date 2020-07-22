;(function($){
	
	ClassicEditor
	//生成一个实例 利用id挂载在该dom节点
    .create(document.querySelector( '#content'),{
    	language:'zh-cn',
    	ckfinder:{
    		uploadUrl:'/article/uploadImage'
    	}
    })

    .then(editor=>{
    	window.editor =editor
    })
    .catch(err=> {
        console.error( error );
    });
            
})(jQuery);