const app = getApp()

Page({
  data: {
    productList: [
      {
        image: '/Picture/9.jpg',
        Price: '1538',
        goodsName: '18K金钻石珐琅',
        SalesVoul: 18,
      }, {
        image: '/Picture/10.jpg',
        Price: '1538',
        goodsName: '18K金钻石珐',
        SalesVoul: 18,
       
      }, {
        image: '/Picture/11.jpg',
        Price: '1538',
        goodsName: '海水珍珠吊坠',
        SalesVoul: 18,
        
      }
      , {
        image: '/Picture/12.jpg',
        Price: '1538',
        goodsName: '珐琅海水珍珠吊坠',
        SalesVoul: 18,
        
        
      }
      , {
        image: '/Picture/9.jpg',
        Price: '1538',
        goodsName: '珍珠吊坠',
        SalesVoul: 18,
      }
    ],
    nowtab: '全部订单'
  },
  onLoad: function (options) {
    this.getList(1);
  },

  onPullDownRefresh: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    });
    this.getList(1, true);
  },

  getList: function (page, stopPull) {
    var that = this
    wx.request({
      url: 'https://wechat.sparklog.com/jokes',
      data: {
        page: page,
        per: '20'
      },
      method: 'GET',
      success: function (res) {
        if (page === 1) {
          that.setData({
            page: page + 1,
            listLi: res.data,
            done: false
          })
          if (stopPull) {
            wx.stopPullDownRefresh()
          }
        } else {
          if (res.data < 20) {
            that.setData({
              page: page + 1,
              listLi: that.data.listLi.concat(res.data),
              done: true
            })
          } else {
            that.setData({
              page: page + 1,
              listLi: that.data.listLi.concat(res.data)
            })
          }
        }
      },
    })
  },

  loadMore: function () {
    var done = this.data.done;
    if (done) {
      return
    } else {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      });
      var page = this.data.page;
      this.getList(page)
    }
  },

  scrll: function (e) {
    var scrollTop = e.detail.scrollTop
    if (scrollTop > 600) {
      this.setData({
        scrollTop: 1,
        hidden: false
      })
    } else {
      this.setData({
        scrollTop: 1,
        hidden: true
      });
    }
  },
 onItemClick: function (event) {

    wx.navigateTo({
      url: '../GoodsDetail/goodsdetail'
    })
    
  },
  goTop: function () {
    this.setData({
      scrollTop: 0,
      hidden: true
    })
  }
})