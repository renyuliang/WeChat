// 模拟真实数据，从服务器获取（开元json数据）
import {demoModel} from '../../models/demo.js'
// 导入本地假数据
import {list} from '../../falseData/json1.js'
import {musicList} from '../../falseData/music.js'

let initDemoModel = new demoModel()
let interval1

Page({

  /**
   * 页面的初始数据
   */
  data: {
    getList: [],
    // 点赞 变量
    like: true,
    count: 6,
    // 切换nav 变量
    title: '',
    first: true,
    firstIndex: 0,
    lastIndex: 0,
    last: false,
    // 音频 变量
    getMusicList: [],
    musicSrc: '',
    musicTitle: '',
    musicImgUrl: '',
    musicIndex: 0,
    musicTotal: 0,
    // 问题滚动
    text: "这是一条会滚动的文字滚来滚去的文字跑马灯，不错哟",
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marquee_margin: 30,
    size: 14,
    interval: 20 // 时间间隔
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1. 常规写法
    // 2. http.js 中 封装了 数据请求

    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   method: 'get',
    //   success:(res)=>{
    //     // 使用ES6 回调函数 可以使用 this 调用 data 中的变量
    //   }
    // })

    // 模拟真实数据，从服务器获取（开元json数据）
    initDemoModel.demo('寸衫',(res)=>{
      console.log(res.result)
    })

    // 本地假数据的赋值 
    this.setData({
      getList: list,
      getMusicList: musicList
    })

    // nav切换
    this.showChangeDetail(0)
    // 音频播放
    this.changeMusicList(0)

    // console.log(this.data.getList)
    // this.data.getList.forEach((res,index)=>{
    //   // console.log(index)
    //   // console.log(res.name)
    //   if (index === 0) {
    //     this.setData({
    //       title: res.name
    //     })
    //   }
    // })
  },

  // 外部页面，点击调用的组件 自定义事件
  // 点赞事件
  clickLike: function (event) {
    // event.detail 里面，就是在组件中，自定义的内容
    console.log(event.detail)
  },
  // 切换内容 上一页
  onPrev: function (event) {
    console.log(event)
  },
  // 切换内容 下一页
  onNext: function (event) {
    console.log(event)
    let _index = event.detail.index
    _index = _index + 1
    this.setData({
      lastIndex: _index
    })
    this.showChangeDetail(_index)
    // 更新index
    // this.data.
  },
  // 假数据 公用遍历页面
  showChangeDetail(_index) {
    this.data.getList.forEach((res, index) => {
      if (index === _index) {
        this.setData({
          title: res.name
        })
        console.log(this.data.title)
      }
    })
  },
  // 音频 数据源
  changeMusicList(_index){
    this.setData({
      musicTotal: ((this.data.getMusicList.length) - 1)
    })
    this.data.getMusicList.forEach((res,index) => {
      if (_index === index) {
        this.setData({
          musicSrc: res.src,
          musicTitle: res.title,
          musicIndex: index,
          musicImgUrl: res.url
        })
      }
    })
  },
  // 音频 上一首
  musicPrev(event){
    let index = event.detail.behavior
    this.changeMusicList(index)
  },
  // 音频 下一首
  musicNext(event) {
    let index = event.detail.behavior
    this.changeMusicList(index)
  },

  toWXS(){
    wx.navigateTo({
      url: `/pages/wxs/index`,
    })
  },
  toStorage() {
    wx.navigateTo({
      url: `/pages/storage/index`,
    })
  },
  toRoll() {
    wx.navigateTo({
      url: `/pages/rollBottom/index`,
    })
  },
  toUserInfo() {
    wx.navigateTo({
      url: `/pages/toUserInfo/index`,
    })
  },
  tobaidu() {
    wx.navigateTo({
      url: `/pages/outer/index`,
    })
  },
  towaterfall() {
    wx.navigateTo({
      url: `/pages/waterfall/index`,
    })
  },
  tomodal() {
    wx.navigateTo({
      url: `/pages/dialogModal/index`,
    })
  },
  tochangeImg() {
    wx.navigateTo({
      url: `/pages/changeToImg/index`,
    })
  },
  toTabar(){
    wx.navigateTo({
      url: `/pages/tabar/index`,
    })
  },
  toSearch(){
    wx.navigateTo({
      url: `/pages/searchPage/index`,
    })
  },
  toLazyLoad(){
    wx.navigateTo({
      url: `/pages/lazyLoad/index`,
    })
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
    // const mMgr = wx.getBackgroundAudioManager()
    // setTimeout(() => {
    //   mMgr.src = 'http://sc1.111ttt.cn/2018/1/03/13/396131225385.mp3'
    //   mMgr.title = '塑料袋口'
    //   mMgr.play()
    //   console.log(mMgr.src, mMgr.title)
    // }, 1000)
    // console.log('show')
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
    clearInterval(interval2);
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