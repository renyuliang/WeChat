// pages/pageList/index.js
import {
  getList
} from '../../models/pageList.js'

let getListData = new getList()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getlist: [],
    showlength: 10,
    showloadingCenter: false,
    showloadingBottom: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      showloadingCenter: true
    })
    // 获取list
    getListData.list().then(res => {
      this.setData({
        showloadingCenter: false,
        getlist: res
      })
    })
  },

  getDetail(e) {
    console.log('获取的item是：', e.detail.detail)
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
    wx.showNavigationBarLoading() //显示加载
    getListData.list().then(res => {
      this.setData({
        showlength: 10,
        getlist: res
      })
      wx.hideNavigationBarLoading() // 隐藏加载
      wx.stopPullDownRefresh() // 停止下拉
      wx.showToast({
        title: '刷新成功',
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.showlength >= this.data.getlist.length) {
      wx.showToast({
        title: '暂无更多数据',
        icon: 'none'
      })
      return false
    }
    this.setData({
      showloadingBottom: true
    })
    setTimeout(() => {
      this.setData({
        showloadingBottom: false,
        showlength: this.data.getlist.length
      })
    }, 2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})