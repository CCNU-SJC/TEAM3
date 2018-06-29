// pages/detail/detail.js
var app = getApp()
Page({
  data: {
    logs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      event_id: options.event_id,
    })
    wx.request({
      url: 'https://np6ynshe.qcloud.la/pagedetail/detail',//请求地址
      data: {
        event_id: options.event_id,
      },
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
          logs: res.data
        });
        wx.setStorage({
          key: 'key',
          data: res.data.c_id,
          success: function (res) {
            console.log(res)
          }
        })

      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
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
    var that = this;
    wx.getStorage({
      key: 'read',
      success: function (res) {
        console.log(res.data)
        that.setData({
          logs: res.data
        })
      }
    })
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
