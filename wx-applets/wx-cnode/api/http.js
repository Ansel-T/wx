
/**
 * 验证返回的的code码问题
 * @param {*} resolve
 * @param {*} res 返回的data
 */
const checkCode = (resolve,res) => {
  if (+res.statusCode === 200) {
    resolve(res)
  } else {
    console.error(res);
  }
}


/**
 * 网络请求API接口
 * @param  {String} path   请求路径
 * @param  {Object} params 参数
 * @return {Promise}
 */
const apiUrl = "https://cnodejs.org/api/v1/";
const http = (path, params={},isShowLoading=true) => {
  if (isShowLoading){
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  }
  let method = params.method;
  delete params.method;
  return new Promise((resolve, reject) => {
    console.log(params)
    wx.request({
      url: `${apiUrl}${path}`,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'application/json' },
      method: method || 'get',
      success: function (res) {
        checkCode(resolve,res)
        wx.hideLoading()
      },
      fail: function (err) {
        wx.hideLoading()
        reject(err)
      }
    })
  })
}
module.exports = {
  http: http
}
