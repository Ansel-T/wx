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
    let accesstoken = (wx.getStorageSync('accesstoken') !== '' || wx.getStorageSync('accesstoken')) ? wx.getStorageSync('accesstoken') : null;
    let myInfo = (wx.getStorageSync('myInfo') !== '' || wx.getStorageSync('myInfo')) ? wx.getStorageSync('myInfo') : null;
    console.log(myInfo);
    this.setData({
      accesstoken: accesstoken,
      myInfo,
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
    wx.clearStorageSync("myInfo");
    this.setData({
      accesstoken: null,
      myInfo: null,
    })
  },

  checkToken:function(token){
    app.api.checkToken(token)
    .then(res => {
      this.fetchMyInfo(res.data.loginname)
      this.fetchCollect(res.data.loginname)
    })
    .catch(err => {

    })
  },

  fetchMyInfo:function(name){
    app.api.fetchUserInfo(name)
    .then( res => {
      let myInfo = res.data.data;
      this.setData({
        myInfo
      })
      wx.setStorageSync("myInfo", this.data.myInfo);
    })
    .catch( err => {
      console.error(err);
    })
  },

  fetchCollect: function (name) {
    app.api.fetchCollect(name)
    .then( res => {
      let myInfo = this.data.myInfo ;
      myInfo.collect = res.data.data;
      this.setData({
        myInfo
      })
      console.log(myInfo);
      wx.setStorageSync("myInfo", this.data.myInfo);
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