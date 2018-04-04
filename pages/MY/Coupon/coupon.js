
Page({
  data: {
    hasCoupon: true,
    coupons: [
      {
        Num: 7,
        Type: 'discount',
      },
      {
        Num: 700,
        Type: 'cash',
      }
    ]
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/couponList',
      success: function (res) {
        if (res.data.CouponList.length != 0) {
          that.setData({
            coupons: res.data.CouponList,
            hasCoupon: true
          })
        }
      }
    })
  },
  toIndex: function () {
    wx.switchTab({
      url: '../index/index'
    })
  }
})