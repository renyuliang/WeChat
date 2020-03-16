// pages/toUserInfo/index.js
import {
  getList
} from '../../models/pageList.js'

let getListData = new getList()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userBtn: false,
    userInfo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查看是否授权
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (info) => {
              console.log(info)
              this.setData({
                userInfo: info.userInfo,
                userBtn: true
              })
            }
          })
        } else {
          wx.authorize({

            scope: 'scope.record',

            success() {

              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问

              wx.startRecord()

            }

          })
        }
      }
    })
    this.onLogin()
  },
  onLogin() {
    wx.login({
      success(res) {
        console.log(res);
        let code = res.code
        let params = {
          appid: 'wx0723e6f3723feef7',
          secret: '7c020c02f78dc75cc86ce0cb5477e8cf',
          js_code: code,
          grant_type: 'authorization_code'
        }
        getListData.getPhone(params).then(res => {
          console.log(res)
        })
        // wx.request({
        //   url: 'https://api.weixin.qq.com/sns/jscode2session',
        //   method: "GET",
        //   data: {
        //     appid: 'wx0723e6f3723feef7',
        //     secret: '7c020c02f78dc75cc86ce0cb5477e8cf',
        //     js_code: code,
        //     grant_type: 'authorization_code'
        //   },
        //   success: function (res) {
        //     console.log(res);
        //   }
        // })
      }
    })
  },
  getPhoneNumber(e) {
    console.log(e)
  },
  // onGetUserInfo(e) {
  //   const userInfo = e.detail.userInfo
  //   if (userInfo) {
  //     this.setData({
  //       userInfo: e.detail.userInfo,
  //       userBtn: true
  //     })
  //   }
  // },
  getUserInfo(e) {
    const userInfo = e.detail.userInfo
    if (userInfo) {
      this.setData({
        userInfo: e.detail.userInfo,
        userBtn: true
      })
    }
    console.log(userInfo)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '红领巾标题',
      imageUrl: '/components/images/imgBack.png',
      path: '/pages/classIc/classIc'
    }
  }
})