// pages/rollBottom/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: 0,
    widthImg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      widthImg: wx.getSystemInfoSync().windowWidth,
      list: 5
    })
  },

  searchImg() {
    wx.previewImage({
      current: 'http://img12.3lian.com/gaoqing02/02/93/37.jpg',
      urls: ['http://dmimg.5054399.com/allimg/pkm/pk/22.jpg', 'http://file02.16sucai.com/d/file/2014/0704/e53c868ee9e8e7b28c424b56afe2066d.jpg',
        'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg'
      ],
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