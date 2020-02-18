// pages/rollBottom/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: 0,
    widthImg: '',
    showloadingBottom: false,
    showloadingCenter: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      widthImg: wx.getSystemInfoSync().windowWidth,
      showloadingCenter: true
    })
    setTimeout(() => {
      this.setData({
        showloadingCenter: false,
        list: 5
      })
    }, 2000)
  },
  randRo(n) {
    var chars = ['1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f', 'g']
    let str = ''
    for (var i = 0; i < n; i++) {
      var id = Math.ceil(Math.random() * 9)
      str += chars[id]
    }
    return str
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
    console.log('生产随机字符串：', this.randRo(8))
    this.setData({
      showloadingBottom: true
    })
    setTimeout(() => {
      this.setData({
        showloadingBottom: false,
        list: this.data.list + 5
      })
      console.log(this.data.list)
    }, 2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})