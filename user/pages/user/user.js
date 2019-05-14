//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList: [{
      icon: 'edit',
      color: 'red',
      badge: 24,
      name: '答题'
    },{
      icon: 'favorfill',
      color: 'cyan',
      badge: 6,
      name: '收藏'
      }, {
        icon: 'tagfill',
        color: 'olive',
        badge: 8,
        name: '错题'
      }],
    gridCol: 3,
    skin: false
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
  },
  showQrcode: function(){
    wx.navigateTo({
      url: '../zan/zan'
    })
  },
  setting: function(){
    wx.navigateTo({
      url: '../setting/setting'
    })

  },
  write: function () {
    wx.navigateTo({
      url: '../write/write'
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  question: function () {
    wx.navigateTo({
      url: '../question/question'
    })
  }


  
})
