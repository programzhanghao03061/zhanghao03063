//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageWidth: wx.getSystemInfoSync().windowWidth/2,
    typeList: [
      {
        typeName: '镶钻类型',
        productList: [{
          descri: '单钻',
        }, {
          descri: '群钻',
        }],
      },
     
      {
        typeName: '求婚钻戒',
        productList: [{
          descri: 'Forever经典型',
        }, {
            descri: 'My Heart系列',
        }
          , {
            descri: 'Marry Me&稀世粉钻',
        }
          , {
            descri: 'I Swear系列',
          }
          , {
            descri: 'Just You系列',
          }
          , {
            descri: 'Princess系列',
          }
          , {
            descri: 'True Love系列',
          }
          , {
            descri: 'Believe系列',
          }
          , {
            descri: 'Love line系列',
          }
          , {
            descri: 'Endless love系列',
          }, {
            descri: 'Wedding系列',
          }]
        },
     

      {
        typeName: '结婚钻戒',
        productList: [{
          descri: '结婚对戒',
        }, {
          descri: '男戒',
        }],
      }

      , {
        typeName: '饰品',
        productList: [{
          descri: '吊坠',
        }, {
            descri: '项链',
          }, {
            descri: '手链',
        }, {
            descri: '耳钉',
        }],
      }
      , {
        typeName: '吊坠',
        productList: [{
          descri: 'My Heart系列',
        }, {
            descri: 'True Love系列',
        }],
      }
      , {
        typeName: '耳饰',
        productList: [{
          descri: 'My Heart系列',
        }, {
            descri: 'Forever系列',
        }],
      }

        ],





    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
