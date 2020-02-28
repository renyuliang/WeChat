// pages/form/index.js
import * as verify from '../../utils/verify.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    choseIndex: 0,
    area: ['广东省', '广州市', '海珠区'],
    array: ['美国', '中国', '巴西', '日本']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  // 去掉空格
  initInput(e) {
    return verify.vNameInput(e.detail.value)
  },
  // 验证姓名
  initBlurName(e, num) {
    e = num == 'submit' ? e : e.detail.value
    verify.vName(e, '输入框不能为空')
  },
  // 验证手机号码
  initBlurPhone(e, num) {
    e = num == 'submit' ? e : e.detail.value
    verify.vPhone(e, '手机号码为11位', '手机号码有误')
  },
  // 日期选择
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 单选
  bindPickerChange(e) {
    this.setData({
      choseIndex: e.detail.value
    })
  },
  // 地区选择
  bindRegionChange: function(e) {
    this.setData({
      area: e.detail.value
    })
  },
  // 提交
  formSubmit(e) {
    // 姓名
    if (!e.detail.value.name) {
      this.initBlurName(e.detail.value.name, 'submit')
      return false
    }
    // 手机号码
    let ph = verify.vPhone(e.detail.value.phone)
    if (!ph) {
      this.initBlurPhone(e.detail.value.phone, 'submit')
      return false
    }
    // 爱好
    if (!e.detail.value.loves.length) {
      verify.vCheckbox(e.detail.value.loves, '最少选择一项')
      return false
    }
    console.log(e.detail.value)
  },
  // 重置
  formReset(e) {

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