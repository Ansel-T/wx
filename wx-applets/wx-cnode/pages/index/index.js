//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topicList:null
  },
  onLoad: function () {
    let parmas = {
      page:1,
      tab: 'ask',
      limit:10,
    }
    console.log(this);
    app.api.topics('topics', parmas).then(res => {
      console.log(res);
    })
    .catch(e => {
      console.error(e)
    })
  }
  
})
