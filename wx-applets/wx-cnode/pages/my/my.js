// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    renderShow:false,
    accesstoken:null,
    myInfo:null,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync('accesstoken'))
    console.log(Boolean(wx.getStorageSync('accesstoken')));
    let info = (wx.getStorageSync('accesstoken') !== '' || wx.getStorageSync('accesstoken')) ? wx.getStorageSync('accesstoken') : null;
    console.log(info);
    this.setData({
      accesstoken: info,
      renderShow:true
    })
    
  },

  login:function(){
    wx.scanCode({
      success: (res) => {
        wx.setStorageSync("accesstoken", res);
        console.log(res)
        this.setData({
          accesstoken: res.result
        })
        this.checkToken(res.result);
      },
      fail:(err) => {
        console.error(err);
      }
    })
  },
  signout:function(){
    wx.clearStorageSync("accesstoken");
    this.setData({
      accesstoken: null
    })
  },

  checkToken:function(token){
    app.api.checkToken(token)
    .then(res => {

    })
    .catch(err => {

    })
  },

  fetchMyInfo:function(){
    app.api.fetchMyInfo(this.accesstoken.name)
    .then( res => {
      console.error(err);
    })
    .catch( err => {
      console.error(err);
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