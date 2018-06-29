Page({ 
  data: {
    logs: []
  },
 
  bindDateChange: function (e) {
    console.log(e.detail.value);
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

  onLoad: function (options) {
    var that = this;
    this.setData({
      event_id: options.event_id,
    })
    console.log('---------url------');
    console.log(options);
    console.log(options.source);
    wx.request({

      url: 'https://np6ynshe.qcloud.la/pageedit/editget',
      data: {
        event_id: options.event_id,
      },
      header: {//请求头
        "Accept": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
          logs: res.data
        })

      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },

formSubmit: function (e) {
  var _this = this;
console.log('提交',e.detail.value.event_id);
console.log(e);
  wx.request({
    url: 'https://np6ynshe.qcloud.la/pageedit/editpost',
      data:
    {
      event_id: e.detail.value.c_id,
      c_name: e.detail.value.c_name,
      c_date: e.detail.value.c_date,
      c_time: e.detail.value.c_time,
      c_open: e.detail.value.c_open,
      c_close: e.detail.value.c_close,
      c_remark: e.detail.value.c_remark
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    success: function (res) {
      console.log("数据库反悔的",res);
      wx.showToast({
        title: "修改成功", //数据返回提示，查看后台PHP
        icon: 'success',
        duration: 2000
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
