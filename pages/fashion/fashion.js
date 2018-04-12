//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    actionList: [
      {
        image: 'http://btdxcx.com:3012/image/F2B6DA3A531A7C3E',
        actionName: '红颜会英国皇室下午茶礼仪分享',
        actionDesc: '红颜会 & SENSE JEWELRY 英国皇室下午茶礼仪分享'
      },
       {
         image: 'http://btdxcx.com:3012/image/FEFD92EE8641DB30',
         actionName: '红颜会英国皇室下午茶礼仪分享',
         actionDesc: '红颜会 & SENSE JEWELRY 英国皇室下午茶礼仪分享'
      },
      {
        image: 'http://btdxcx.com:3012/image/F2B6DA3A531A7C3E',
        actionName: '红颜会英国皇室下午茶礼仪分享',
        actionDesc: '红颜会 & SENSE JEWELRY 英国皇室下午茶礼仪分享'
      },
      {
        image: 'http://btdxcx.com:3012/image/FEFD92EE8641DB30',
        actionName: '红颜会英国皇室下午茶礼仪分享',
        actionDesc: '红颜会 & SENSE JEWELRY 英国皇室下午茶礼仪分享'
      }
      ],
  },

  toActionList: function () {
    wx.navigateTo({
      url: '../actionDetail/actionDetail'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})
