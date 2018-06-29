var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  radioChange: function (e) {
    this.setData({
      a_attend: e.detail.value
    })
  },

  bindRemark: function (e) {
    this.setData({
      a_remark: e.detail.value
    })
  },

  onLoad: function (options) {

  },

  formSubmit: function (e) {
    var that = this;
    wx.getStorage({
      //获取数据的key
      key: 'key',
      success: function (res) {
        console.log("页面传递的cid", res);

        wx.request({
          url: 'https://np6ynshe.qcloud.la/pagesubmit/submit',
          data: {
            openid: app.globalData.openid,
            event_id: res.data,
            a_attend: e.detail.value.a_attend,
            a_remark: e.detail.value.a_remark
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          success: function (res) {
            wx.navigateBack({//返回
              delta: 1
            })
            console.log("eventid传递成功么", res);
            var err = res.data.error
            if (err) {
              taht.setData({
                error: err
              })
            }
            else {
            }
          },
          /*失败会调用 */
          fail: function (res) {
            console.log(res)
          }
        })

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
