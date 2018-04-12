//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    actionList: [
      {
        image: 'http://btdxcx.com:3012/image/F2B6DA3A531A7C3E',
        actionName: '红颜会英国皇室下午茶礼仪分享',
        actionDesc: '红颜会 & SENSE JEWELRY 英国皇室下午茶礼仪分享',
        actionTime:'2017-11-24',
        actionLocation:'深圳南山区华侨城波托菲诺纯水岸香中街1-35号',
        actionDetail:
        [
          {
            image: 'http://btdxcx.com:3012/image/D09C5074CD583CD3',
            actionDesc: '  11月24日下午，由深圳红颜会主办，SENSE JEWELRY尚珠宝协办，在SENSE JEWELRY尚珠宝会所举办的英式皇家礼仪分享会，圆满结束。'
          },
          {
            image: 'http://btdxcx.com:3012/image/0005C826384A5C4E',
            actionDesc: '红颜会 & SENSE JEWELRY 英国皇室下午茶礼仪分享'
          }, {
            image: 'http://btdxcx.com:3012/image/3F3F0F8F04340430',
            actionDesc: '红颜会 & SENSE JEWELRY 英国皇室下午茶礼仪分享'
          }

        ]
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
