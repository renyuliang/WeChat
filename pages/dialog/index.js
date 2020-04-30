// pages/dialog/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    showHeight: 0,
    list: ['测试1', '2试3', '测试测试1测试24测试3', '测试2测试2', '测试测试1测试24测试3','234','osdkdsf','lskd2'],
    newList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      showHeight: wx.getSystemInfoSync().screenHeight - 109
    })
    this.initdownlist = this.selectComponent('#initdownlist')

    
    let newarr = this.data.list.filter(val=>{
      console.log(val,val.length)
      if (val.length <= 6) {
        return val
      } else {
        return ''
      }
    })
    this.setData({
      list: newarr.slice(0,3)
    })
    console.log(newarr)
  },

  showModal() {
    this.setData({
      showDialog: true
    })
    this.initdownlist.showModal()
  },

  hideModal() {
    this.setData({
      showDialog: false
    })
    this.initdownlist.hideModal()
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