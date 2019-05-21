// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    renderShow:false,
    loginInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let info = wx.getStorageSync('loginInfo') ? wx.getStorageSync('loginInfo') : null;
    this.setData({
      loginInfo: info,
      renderShow:true
    })
    
  },

  login:function(){
    wx.scanCode({
      success: (res) => {
        wx.setStorageSync("loginInfo", res);
        this.setData({
          loginInfo: res
        })
      },
      fail:(err) => {
        console.error(err);
      }
    })
  },
  signout:function(){
    wx.clearStorageSync("loginInfo");
    this.setData({
      loginInfo: null
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