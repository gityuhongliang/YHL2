
function getMovieList(url,success){
  wx.request({
    url:  url,
    success (res) {
        var data = formatMovieList(res.data.subjects)
        success(data)//调用成功回调函数设置setData
    }
  })
}

function formatMovieList(data){
  return data.map(function(item){
    return{
        title:item.title,
        coverImage:item.images.large,
        score:item.rating.average,
        stars:coverStarToArray(item.rating.stars)
    }
  })
}

function coverStarToArray(stars){
/**
 * 3 [1,1,1,0,0]
 * 4 [1,1,1,1,0]
 */
  var arr = []
  var num = parseInt(stars.substring(0,1))//转换为数字再截取第一位
  for (var i = 1; i <= 5; i++){
    if(i <= num){
      arr.push(1)
    }else{
      arr.push(0)
    }
  }
  return arr
}

module.exports = {
  getMovieList: getMovieList
}
