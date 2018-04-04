Page({
  data: {
    addrs: 
    [
      {
        name: '张浩',
        phone: '13927303058',
        address: '广东省惠州市仲凯高新区TCL显示高科有限公司',
        isDefault: true,
        
      }, {
        name: '张浩',
        phone: '13927303058',
        address: '广东省惠州市仲凯高新区TCL显示高科有限公司',
        isDefault: false,
      }
    ]
  },
  onShow: function (options) {
    // var that = this;
    // wx.request({
    //   url: 'http://127.0.0.1:3000/addrList',
    //   success: function (res) {
    //     that.setData({
    //       addrs: res.data.addrList
    //     })
    //   }
    // })
  },
  toAddr: function () {
    wx.navigateTo({
      url: '/pages/MY/NewAdd/newadd'
    })
  },
  setDefault: function (el) {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/setDefaultAddr?id=' + el.target.dataset.id,
      success: function (res) {
        wx.request({
          url: 'http://127.0.0.1:3000/addrList',
          success: function (res) {
            that.setData({
              addrs: res.data.addrList
            })
          }
        })
      }
    })
  },
  deleteAddr: function (el) {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/delAddr?id=' + el.target.dataset.id,
      success: function (res) {
        console.log(res.data)
        if (res.data.result) {
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          })

          wx.request({
            url: 'http://127.0.0.1:3000/addrList',
            success: function (res) {
              that.setData({
                addrs: res.data.addrList
              })
            }
          })
        }
      }
    })
  }
})