import { lastAt } from '../../utils/util.js';

//获取应用实例
const app = getApp()

Page({
  data: {
    tab:'',
    page:1,
    topicList:null
  },
  onLoad: function () {
    this.fetchTopics(true);
  },

  changeTab:function(e){
    let tab = e.currentTarget.dataset.tab;
    this.setData({
      tab:tab,
      page:1
    })
    this.fetchTopics(true);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // this.fetchTopics(true);
  },

  /**
   * 页面下拉到底部
   */
  onReachBottom:function(){
    this.fetchTopics();
  },

  fetchTopics:function(init=false){
    let parmas = {
      tab:this.data.tab,
      page: this.data.page,
      limit: 10,
    }

    app.api.topics(parmas)
    .then(res => {
      let data = this.formatListData(res.data.data);
      this.setData({
        page:init ? 2 : this.data.page + 1,
        topicList: init ? data : this.data.topicList.concat(data)
      })
      console.log(this.data.topicList)
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
