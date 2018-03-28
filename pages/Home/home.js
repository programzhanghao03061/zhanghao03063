var app = getApp()
Page({
  data: {
    movies: [
      { id: 1,url: '../../Picture/1.jpg'  },
      { id: 2,url: '../../Picture/2.jpg' },
      { id: 3,url: '../../Picture/7.jpg' },
      { id: 4,url: '../../Picture/8.jpg' }
    ]
  },

  onItemClick: function (event) {

    wx.navigateTo({
      url: '../GoodsList/goodslist'
    })
   wx.showToast({
      title: event.target.dataset.postid + "",
    })
  },
  onLoad: function () {
  }
})    
