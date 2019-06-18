//app.js
const api = require('./api/api.js')

App({
  api: api,
  accesstoken:'',
  onLaunch: function () {
    this.setMessageCount()
  },
  globalData: {
    userInfo: null
  },
  setMessageCount:function(){
    let accesstoken = wx.getStorageSync('accesstoken').result;
    api.fetchMessageCount({accesstoken})
    .then(res => {
      if(res.data.success && res.data.data>0){
        wx.showTabBarRedDot({
          index:2
        })
      }
    })
    .catch(e => {
      console.error(e)
    })
  }
})