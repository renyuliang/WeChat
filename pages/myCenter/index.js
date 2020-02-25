// pages/myCenter/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    centerList: [
      {
        name: '图片懒加载',
        path: '/pages/lazyLoad/index?name="红领巾"'
      },
      {
        name: '列表详情',
        path: '/pages/pageList/index'
      },
      {
        name: '选项卡',
        path: '/pages/tabar/index'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  navigateTo(e) {
    let path = e.detail.path
    wx.navigateTo({
      url: path
    })
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