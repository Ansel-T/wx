// pages/myTopicList/myTopicList.js

import { lastAt } from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    titleTxt:'',
    topicList:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setPageTitle(options.type);
    let myInfo = wx.getStorageSync('myInfo');
    let topicList = myInfo[options.type] ? myInfo[options.type] : [];

    this.setData({
      topicList: this.formatListData(topicList)
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  
  setPageTitle(type){
    let title = 'Cnode';
    switch(type){
      case 'collect':
        title = '我收藏的'
        break
      case 'recent_topics':
        title = '我最近创建的'
        break
      case 'recent_replies':
        title = '我最近参与的'
        break
    }
    this.setData({
      type: type,
      titleTxt:title
    })
    wx.setNavigationBarTitle({
      title: title
    })

  },

  /**
   * 处理时间
   */
  formatListData: function (list) {
    return list.map((item) => {
      item.lastReplyAt = lastAt(item.last_reply_at);
      console.log(item);
      return item;
    })
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