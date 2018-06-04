// pages/submit/submit.js
var app = getApp()

Page({
  data: {
    userInfo: {
      avatarUrl: "../images/avatar1.jpg",
      nickName: "dog"
    }
  },
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })
  },
  formSubmit: function (e) {
    console.log('提交表单')
    console.log(e.detail.value)
  }
})  

