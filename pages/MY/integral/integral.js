Page({
  data: {
    orderList: [
      {
        OrderNumber: '12345678',
        goodsName: '18K金钻石珐琅海水珍珠吊坠（定制）',
        goodsNum: 1,
        status: '待付款',
        total: '19.80',
      }, {
        OrderNumber: '12345678',
        goodsName: '18K金钻石珐琅海水珍珠吊坠（定制）',
        goodsNum: 1,
        status: '待收货',
        logistics: '顺丰快递',
      }, {
        OrderNumber: '12345678',
        goodsName: '18K金钻石珐琅海水珍珠吊坠（定制）',
        goodsNum: 2,
        status: '待付款',
        total: '39.60',
      }
      , {
        OrderNumber: '12345678',
        goodsName: '18K金钻石珐琅海水珍珠吊坠（定制）',
        goodsNum: 2,
        status: '已完成',
        total: '39.60',
      }
      , {
        OrderNumber: '12345678',
        goodsName: '18K金钻石珐琅海水珍珠吊坠（定制）',
        goodsNum: 2,
        status: '已完成',
        total: '39.60',
      }
    ],
    nowtab: '积分记录'
  },
  onLoad: function (data) {
    this.setData({
      nowtab: data.toTab
    })
  },
  switchTabs: function (el) {
    this.setData({
      nowtab: el.currentTarget.dataset.nowtab
    })
  },
  toProductList: function () {
    wx.navigateTo({
      url: '../../Type/type'
    })
  },
})
