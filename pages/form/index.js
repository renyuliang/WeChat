// pages/form/index.js
import * as verify from '../../utils/verify.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      name: '',
      phone: "",
      loves: [],
      date: '',
      choseIndex: 0,
      area: ['广东省', '广州市', '海珠区']
    },
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
  initBlurName(e) {
    this.setObj(e)
    this.checkName(e.detail.value)
  },
  checkName(e) {
    verify.vName(e, '输入框不能为空')
  },
  // 验证手机号码
  initBlurPhone(e) {
    this.setObj(e)
    this.checkPhone(e.detail.value)
  },
  checkPhone(e) {
    verify.vPhone(e, '手机号码为11位', '手机号码有误')
  },
  // 多选
  initChange(e) {
    this.setObj(e)
  },
  // 日期选择
  bindDateChange(e) {
    this.setObj(e)
    this.setData({
      'obj.date': e.detail.value
    })
  },
  // 单选
  bindPickerChange(e) {
    this.setObj(e)
    this.setData({
      'obj.choseIndex': e.detail.value
    })
  },
  // 地区选择
  bindRegionChange: function(e) {
    this.setObj(e)
    this.setData({
      'obj.area': e.detail.value
    })
  },
  // 写入值到 obj 对象
  setObj(e) {
    this.data.obj[e.target.dataset.pro] = e.detail.value
  },
  // 提交
  formSubmit(e) {
    // 姓名
    if (!this.data.obj.name) {
      this.checkName(this.data.obj.name)
      return false
    }
    // 手机号码
    let ph = verify.vPhone(this.data.obj.phone)
    if (!ph) {
      this.checkPhone(this.data.obj.phone)
      return false
    }
    // 爱好
    if (!this.data.obj.loves.length) {
      verify.vCheckbox(this.data.obj.loves, '最少选择一项')
      return false
    }
    console.log(e.detail.value)
  },
  // 重置
  formReset(e) {
    this.data.obj.name = ''
    this.data.obj.phone = ''
    this.data.obj.loves = []
    this.data.obj.date = ''
    this.data.obj.choseIndex = 0
    this.data.obj.area = []
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