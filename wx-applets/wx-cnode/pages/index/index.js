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
    app.api.topics(parmas).then(res => {
      console.log(res.data.data);
      this.setData({
        topicList: res.data.data,
      })
    })
    .catch(e => {
      console.error(e)
    })
  }
  
})
