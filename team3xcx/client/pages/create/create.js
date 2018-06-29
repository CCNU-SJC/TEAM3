var app = getApp();
Page({
  data: {
  
  },

  bindDateChange: function (e) {
    this.setData({
      c_date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      c_time: e.detail.value
    })
  },
  bindOdChange: function (e) {
    this.setData({
      c_open: e.detail.value
    })
  },
  bindDdlChange: function (e) {
    this.setData({
      c_close: e.detail.value
    })
  },
  bindRemark: function (e) {
    this.setData({
      c_remark: e.detail.value
    })
  },

  formSubmit: function (e) {
    var _this = this
      
  wx.switchTab({
      url:'../create_list/mycreate'
    })

    
    wx.request({
      url: 'https://np6ynshe.qcloud.la/pageedit/create',
      data:
      {
        c_name: e.detail.value.c_name,
        c_date: e.detail.value.c_date,
        c_time: e.detail.value.c_time,
        c_open: e.detail.value.c_open,
        c_close: e.detail.value.c_close,
        c_remark: e.detail.value.c_remark,
        openid: app.globalData.openid
      },
      method: 'POST', 
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log("获取global",app.globalData.openid)
        wx.switchTab({
          url: '../create_list/mycreate'
        })
        var err = res.data.error
        if (err) {
          _this.setData({
            error: err
          })
        }
        else {
          
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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