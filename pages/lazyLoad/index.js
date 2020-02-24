// pages/lazyLoad/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '', // 获取当前页面的可视高度
    group: [{
        src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB11yxeNVXXXXbwXFXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i3/TB1ndJiQFXXXXctaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1BYGDLpXXXXbuXXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB1_9GoMVXXXXXmaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB1cSZZNFXXXXaKaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1MwqbLpXXXXaEXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1RVS_QpXXXXXBXXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i5/TB1xEJiLXXXXXcxaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1DSuHJVXXXXXmXXXXwu0bFXXX.png_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i5/TB1aMNyLpXXXXa2XXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1JRHEQpXXXXXwXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1qKEuQpXXXXXYXXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1TlOfQFXXXXX2XXXXwu0bFXXX.png_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1SKu.QpXXXXbDXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB17gJ3OXXXXXcrXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1um5GQpXXXXbiaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1pxCTQpXXXXa2apXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1zksMNVXXXXaRapXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1nbrcOXXXXXXEXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1CI_NQpXXXXXaXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB18vTdQFXXXXXlXpXXwu0bFXXX.png_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1doDVQpXXXXcRaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB17LgBNFXXXXaSXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1fVJJQFXXXXcyXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i3/TB1wnBTKFXXXXcQXXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB11yxeNVXXXXbwXFXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i3/TB1ndJiQFXXXXctaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1BYGDLpXXXXbuXXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB1_9GoMVXXXXXmaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB1cSZZNFXXXXaKaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1MwqbLpXXXXaEXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1RVS_QpXXXXXBXXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i5/TB1xEJiLXXXXXcxaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1DSuHJVXXXXXmXXXXwu0bFXXX.png_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i5/TB1aMNyLpXXXXa2XXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1JRHEQpXXXXXwXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1qKEuQpXXXXXYXXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1TlOfQFXXXXX2XXXXwu0bFXXX.png_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1SKu.QpXXXXbDXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB17gJ3OXXXXXcrXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1um5GQpXXXXbiaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1pxCTQpXXXXa2apXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1zksMNVXXXXaRapXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1nbrcOXXXXXXEXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1CI_NQpXXXXXaXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB18vTdQFXXXXXlXpXXwu0bFXXX.png_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1doDVQpXXXXcRaXXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB17LgBNFXXXXaSXVXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1fVJJQFXXXXcyXpXXSutbFXXX.jpg_240x240xz.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getSystemInfo({ // 获取页面可视区域的高度
      success: (res) => {
        this.setData({
          height: res.screenHeight
        })
      },
    })
    this.showImg()
  },

  onPageScroll() { // 调用showImg函数
    this.showImg()
  },

  showImg() { // 判断高度是否需要加载
    wx.createSelectorQuery().selectAll('.item').boundingClientRect((ret) => {
      const group = this.data.group
      const height = this.data.height
      ret.forEach((item, index) => {
        if (item.top < height) {
          group[index].show = true
        }
      })
      this.setData({
        group
      })
    }).exec()
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

  }
})