// pages/index.js
var app = getApp();
Page({
  data: {
    userInfos:{
    },
    u_name:[],
  },
  onLoad: function () {
    var that = this;
   // console.log(app.globalData.code);
    wx.login({
      success: function (res) {
        // console.log('微信返回的code'.res);
        //用code换取openid
        wx.request({
          url: 'https://np6ynshe.qcloud.la/weapp/onload/getname',
          data: {
            code: res.code,
          },
          success: function (sRes) {
            //console.log(sRes);
            that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
            u_name: sRes.data.u_name
            })
          }

        });
      }
    })
  },

  toast3: function () {
    wx.navigateTo({
      url: '../setting/setting'
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