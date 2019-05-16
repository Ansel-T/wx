import { lastAt } from '../../utils/util.js';

//获取应用实例
const app = getApp()

Page({
  data: {
    topicList:null
  },
  onLoad: function () {
    let parmas = {
      page:1,
      limit:10,
    }
    
    app.api.topics(parmas).then(res => {
      let data = this.formatListData(res.data.data);
      console.log(data);
      this.setData({
        topicList: res.data.data,
      })
    })
    .catch(e => {
      console.error(e)
    })
  },
  formatListData:function(list) {
    return list.map((item) => {
      item.lastAt = lastAt(item.last_reply_at);
      return item;
    })
  }
  
})
