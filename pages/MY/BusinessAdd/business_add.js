Page({
  data: {
    Height: 0,
    scale: 13,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [{
      id: 1,
      iconPath: '/Picture/reduce.png',
      position: {
        left: 10,
        top: 10,
        width: 20,
        height: 20
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '/Picture/add.PNG',
      position: {
        left: 40,
        top: 10,
        width: 20,
        height: 20
      },
      clickable: true
    }
    ],
    circles: []
  },

  onLoad: function () {
    var _this = this;

    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }
        })
      }
    })

    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {

        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            title: "哪里"

          }],
          markers: [{
            id: "2",
            latitude: 22.58845627833008,
            longitude: 113.9652545750141,
            width: 50,
            height: 50,
            title: "珠宝生活馆"

          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 3000,
            strokeWidth: 1
          }]

        })
      }

    })

  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    console.log(e.markerId)

    wx.openLocation({
      latitude: 22.58845627833008,
      longitude: 113.9652545750141,
      scale: 18,
      name: '深圳硅谷大学城',
      address: '深圳硅谷大学城创业园A座'
    })
  },

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }


  },


})