// pages/input/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 输入框的值
    inputName: '',
    textareaName: '',
    inputMoney: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getInput(e){
    this.setData({
      inputName: e.detail.value
    })
  },
  getTextarea(e) {
    this.setData({
      textareaName: e.detail.value
    })
  },

  getInputDigit(e){
    let money = 0
    if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) { //正则验证，提现金额小数点后不能大于两位数字
      money = e.detail.value;
    } else {
      money = e.detail.value.substring(0, e.detail.value.length - 1);
    }
    this.setData({
      inputMoney: money,
    })
  },

  btn(){
    console.log(this.data)
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