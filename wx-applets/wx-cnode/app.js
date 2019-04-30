//app.js
const api = require('./api/api.js')

App({
  api: api,
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null
  }
})