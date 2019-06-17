// pages/topic/topic.js

const app = getApp();
const WxParse = require('../wxParse/wxParse.js');
import { lastAt } from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:true,
    content:null,
    issuingTime:'',
    topicId:'',
    accesstoken:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let token = wx.getStorageSync('accesstoken');
    token = token ? token.result : '';
    app.api.topicDetail({ id: options.id, mdrender: true, accesstoken:token})
    .then( res => {
      let info = res.data.data;
      console.log(info);
      info.replies = this.formatListData(info.replies);
      this.setData({
        isLoading:false,
        topicId:options.id,
        accesstoken:token,
        content: info,
        issuingTime: lastAt(info.create_at)
        })
      let content = info.content;
      WxParse.wxParse('article', 'html', content, this, 5);
    })
    .catch(e => {
      console.error(e)
    })
  },

  /**
   * 添加收藏
   */
  addCollect: function () {
    let data = this.data;
    app.api.addCollect({ accesstoken: data.accesstoken, topic_id: data.topicId, method:'post'})
    .then(res => {
      if(res.data.success){
        let content = this.data.content;
        content.is_collect = true;
        this.setData({
          content
        })
      }
    })
    .catch(e => {
      console.error(e)
    })
  },

  /**
   * 删除收藏
   */
  deCollect: function () {
    let data = this.data;
    app.api.deCollect({ accesstoken: data.accesstoken, topic_id: data.topicId, method: 'post' })
      .then(res => {
        if (res.data.success) {
          let content = this.data.content;
          content.is_collect = false;
          this.setData({
            content
          })
        }
    })
    .catch(e => {
      console.error(e)
    })
  },

  /**
   * 格式化时间
   */
  formatListData: function (list) {
    return list.map((item) => {
      item.createAt = lastAt(item.create_at);
      item.content = item.content.replace(/\<img/gi, '<img style="width:100%;height:auto" ')
      return item;
    })
  },

  popReplyBox:function(){
    console.log('弹出评论框');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})