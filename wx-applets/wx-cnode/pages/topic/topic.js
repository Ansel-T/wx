// pages/topic/topic.js

const app = getApp();
const WxParse = require('../wxParse/wxParse.js');
import { lastAt } from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:null,
    issuingTime:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.api.topicDetail({ id: options.id, mdrender:true})
    .then( res => {
      let info = res.data.data;
      console.log(info);
      info.replies = this.formatListData(info.replies);
      this.setData({
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

  formatListData: function (list) {
    return list.map((item) => {
      item.createAt = lastAt(item.create_at);
      return item;
    })
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