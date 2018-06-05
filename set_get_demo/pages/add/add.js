var app = getApp()
Page({
  data: {
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  addbtn: function () {
    if (this.data.inputValue) {
      wx.redirectTo({
        url: '../get/get'
      })
      wx.setStorage({
        key: "addTel",
        data: this.data.inputValue
      })
    } else {
      wx.showModal({
        title: '事件名称为空',
        content: '请输入事件名称',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  onload: function () {
    //onload
  }

})