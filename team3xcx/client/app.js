App({
  globalData: {
    userInfo: {},//用户昵称  
    openid: '',
    u_name:'',
    code:''
  },

  getUserInfo: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        //console.log(res.userInfo.nickName);
        that.globalData.userInfo = res.userInfo
      }
    })
  },

  userLogin: function () {
    var that = this;
    wx.login({
      success: function (res) {
        //console.log('微信返回的code');
        // console.log(res);
        //用code换取openid
        wx.request({
          url: 'https://np6ynshe.qcloud.la/weapp/onload/getopenid',
        data:{
            code: res.code,
            nickName: that.globalData.userInfo.nickName,
            avatarUrl: that.globalData.userInfo.avatarUrl,
          },
          success:function (sRes) {
            //console.log('服务器返回的code',sRes);
            that.globalData.code = res.code,
            that.globalData.openid = sRes.data.result.openid
          }
        
      });
  }
})

},
onLaunch: function () {
  this.getUserInfo();
  this.userLogin();
}
})