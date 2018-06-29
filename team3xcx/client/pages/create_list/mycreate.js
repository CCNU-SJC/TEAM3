var app = getApp();
Page({
  /* 页面的初始数据  */
  data: {
    postList: []
  },
  onLoad: function () {
    var that = this; // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    wx.request({
      url: 'https://np6ynshe.qcloud.la/weapp/pagecreatelist/createlist',//请求地址
      data:{
         openid: app.globalData.openid
      },
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        console.log("后台返回的createlist",res)
        that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
          postList: res.data.result
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },

  deleteClick: function (event) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (sm) {
        if (sm.confirm) {
          // 用户点击了确定 可以调用删除方法了
          console.log('提示', event.currentTarget.dataset.deleteid);
          wx.request({
            url: 'https://np6ynshe.qcloud.la/pagecreatelist/delete', //删除房间评论
            data: {
               event_id:event.currentTarget.dataset.deleteid
            },
            header: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF - 8'
            },
            method: 'GET',
            success: function (res) {
              console.log(res);
              wx.showToast({
                title: res.data, //数据返回提示，查看后台PHP
                icon: 'success',
                duration: 2000
              })
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        } else if (sm.cancel) {
        }
      }
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

  },


/*onShow是返回mycreate页面并刷新的
  onShow:function(){
    var that = this;
    wx.request({
      url: app.globalData.web_url + 'yourApi?open_id=' +
      wx.getStorageSync('openid'),
      success: function (res) {
        that.setData({
          cartList: res.data.cartList,
          cartSize: res.data.cartSize,
          totalAmount: res.data.totalAmount
        })
      }

    })
  }*/
}) 