var app = getApp()
Page({
  data: {
    movies: [
      { id: 1, url: '../../Picture/3.jpg' },
      { id: 2, url: '../../Picture/4.jpg' },
     
      { id: 3, url: '../../Picture/6.jpg' },
  
      { id: 4, url: '../../Picture/20.jpg' },

      { id: 5, url: '../../Picture/21.jpg' },

    ],

    orderList: [
      {
        status: '图文详情',       
      }, {    
        status: '规格参数',     
      }, {       
        status: '包装清单',    
      }, {
        status: '售后服务',
      }
    ],
    nowtab: '图文详情'
  },



  onLoad: function () {
  }
})  