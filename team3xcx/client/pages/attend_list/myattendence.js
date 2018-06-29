var app = getApp();
Page({
  /* 页面的初始数据  */
  data: {
    postList: []
  },
  onLoad: function () {
    var that = this; // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    wx.request({
      url: 'https://np6ynshe.qcloud.la/weapp/pageattendlist/attendlist',//请求地址
      data: {
        openid: app.globalData.openid
      },
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        console.log("后台返回的createlist", res)
        that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
          postList: res.data.result
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },

  /* 生命周期函数--监听页面卸载  
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