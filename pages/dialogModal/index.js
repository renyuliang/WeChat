// pages/dialogModal/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTapModal: false,
    title: '自定义标题',
    initCancelText: '重置', // 自定义取消按钮
    initConfirmText: '提交',// 自定义确定按钮
    showBtn: false, // true 按钮消失，右上角出现 x
    single: false // true 只显示一个按钮，如果想显示两个改为false即可
    // showBtn single 这两个变量，默认时，可不设置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showTips() {
    wx.showToast({
      title: 'good',
      icon: 'none'
    })
  },
  showLoad(){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(()=>{
      wx.hideLoading()
    },2000)
  },
  showModal() {
    wx.showModal({
      title: '提示',
      content: '确定关闭吗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showAction() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log('返回的下标是：'+res.tapIndex)
      },
      fail(res) {
        console.log('关闭')
      }
    })
  },
  showInitDialog() {
    this.setData({
      showTapModal: true
    })
  },
  // 点击取消按钮的回调函数
  modalCancel(e) {
    // 这里面处理点击取消按钮业务逻辑
    console.log('点击了取消')
  },
  // 点击确定按钮的回调函数
  modalConfirm(e) {
    // 这里面处理点击确定按钮业务逻辑
    console.log('点击了确定')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})