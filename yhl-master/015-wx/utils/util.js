
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
        stars:item.rating.stars
    }
  })
}

module.exports = {
  getMovieList: getMovieList
}
