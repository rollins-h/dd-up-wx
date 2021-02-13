// pages/start/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },
  onLoad(e) {
    var that = this;
    wx.getUserInfo({
      success(res) {
        wx.getUserInfo().then(res1 => {
          var bmobUser = res1.result;
          if (bmobUser.avatarUrl == '' || bmobUser.avatarUrl == undefined) {
            wx.changeUserInfo(res.userInfo.avatarUrl, res.userInfo.nickName).then(res2 => { });
          }
        })
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
  bindgetuserinfo() {
    var that = this;
    wx.getUserInfo({
      success(res) {
        wx.getUserInfo().then(res1 => {
          console.log("1111111111111---");
          var bmobUser = res1.result;
          if (bmobUser.avatarUrl == '' || bmobUser.avatarUrl == undefined) {
            wx.changeUserInfo(res.userInfo.avatarUrl, res.userInfo.nickName).then(res2 => { });
          }
        })
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
  goSign() {
    wx.reLaunch({
      url: '/pages/select/index',
    })
  }
})