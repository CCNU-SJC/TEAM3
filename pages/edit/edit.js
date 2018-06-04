// pages/edit/edit.js
var app=getApp()

Page({
  data: {
    conferenceDate:"2018-01-01",
    conferenceTime:"00:00",
    openday:"2018-01-01",
    ddl:"2018-01-01"
  },
 

  formSubmit:function(e){
    if (conferenceName == null || conferenceName.length == null){
      console.info("请输入用户姓名");
      return;
    }
    if (conferenceDate == null || conferenceDate.length == null){
      console.info("请输入开会日期");
      return;
    }
    if (conferenceTime == null || conferenceTime.length == null) {
      console.info("请输入开会时间");
      return;
    }
    if (openday == null || openday.length == null) {
      console.info("请输入开始日期");
      return;
    }
    if (ddl == null || ddl.length == null) {
      console.info("请输入截止时间");
      return;
    } 
   
  },


  bindDateChange:function(e){
    console.log(e.detail.value)
    this.setData({
      conferenceDate:e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      conferenceTime: e.detail.value
    })
  },
  bindOdChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      openday: e.detail.value
    })
  },
  bindDdlChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      ddl: e.detail.value
    })
  }


})