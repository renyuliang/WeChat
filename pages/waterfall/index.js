// pages/waterfall/index.js
const app = getApp()

var that = undefined;
var doommList = [];
var i = 0;
var ids = 0;
var cycle = null  //计时器

// 弹幕参数
class Doomm {
  constructor(text, top, time, color) {  //内容，顶部距离，运行时间，颜色（参数可自定义增加）
    this.text = text;
    this.top = top;
    this.time = time;
    this.color = color;
    this.display = true;
    this.id = i++;
  }
}
// 弹幕字体颜色
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarBoy: app.globalData.AvatarBoy,
    avatarGirl: app.globalData.AvatarGirl,
    iconBoy: app.globalData.IconBoy,
    iconGirl: app.globalData.IconGirl,
    phoneHeight: (wx.getSystemInfoSync().windowHeight / 3) - 100,
    doommData: [],
    arr: [],
    storeNum: [50]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    for(var i = 0; i <= 30; i++) {
      let obj = {}
      obj.sex = i % 2 == 0 ? 1 : 0
      // 内容为 10个字符 效果最佳
      obj.content = `这是滚动的第${i}个数组`
      that.data.arr.push(obj)
    }
    cycle = setInterval(function () {
      let arr = that.data.arr
      if (arr[ids] == undefined) {
        ids = 0
        // 1.循环一次，清除计时器
        // doommList = []
        // clearInterval(cycle)

        // 2.无限循环弹幕
        that.getRandom()
        doommList.push(new Doomm(arr[ids], that.data.storeNum[1], 6, getRandomColor()));
        if (doommList.length > 20) {   //删除运行过后的dom
          doommList.splice(0, 1)
        }
        that.setData({
          doommData: doommList
        })
        ids++
      } else {
        that.getRandom()
        doommList.push(new Doomm(arr[ids], that.data.storeNum[1], 6, getRandomColor()));
        if (doommList.length > 20) {
          doommList.splice(0, 1)
        }
        that.setData({
          doommData: doommList
        })
        ids++
      }
    }, 700)
  },
  getRandom() {
    let that = this
    var Initrandom = Math.ceil(Math.random() * that.data.phoneHeight)
    if (Math.abs(Initrandom - that.data.storeNum[1]) < 50) {
      Initrandom += 50
    }
    that.data.storeNum.push(Initrandom)
    if (that.data.storeNum.length > 2) {
      that.data.storeNum.splice(0, 1)
    }
    if (that.data.storeNum.length == 2) {
      let cha = Math.abs(that.data.storeNum[0] - that.data.storeNum[1])
      if (cha < 50) {
        that.data.storeNum[1] = that.data.storeNum[1] + 50
      }
    }
  },
  bindbt: function () {
    doommList.push(new Doomm("这是我的弹幕", Math.ceil((Math.random() * that.data.phoneHeight)), 10, getRandomColor()));
    this.setData({
      doommData: doommList
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(cycle)
    ids = 0;
    doommList = []
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(cycle)
    ids = 0;
    doommList = []
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