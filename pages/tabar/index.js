import {
  list
} from "../../falseData/tabar.js"
Page({
  data: {
    cardList: [],
    tabIndex: 0,
    scrollInto: "",
    status: 1, // 防止重复滑动
    showloadingBottom: false,
    showloadingCenter: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      showloadingCenter: true
    })
    setTimeout(() => {
      this.setData({
        cardList: list,
        showloadingCenter: false
      })
    }, 2000)
  },
  // 点击标签，切换
  ontabtap(e) {
    let index = e.target.dataset.current || e.currentTarget.dataset.current;
    this.switchtap(index)
  },
  // 动态切换
  switchtap(index) {
    this.setData({
      tabIndex: index,
      scrollInto: this.data.cardList[index].id
    })
  },
  //滑动swiper，改变选项卡
  changeSwiper(event) {
    this.switchtap(event.detail.current)
  },
  // 滑动到底部
  rollBottom() {
    if (this.data.status == 1) {
      this.setData({
        status: 2,
        showloadingBottom: true
      })
      setTimeout(() => {
        let indexObj = this.data.cardList[this.data.tabIndex]
        // 模拟数据
        for (let i = 0; i < 5; i++) {
          let obj = {}
          obj.id = this.randRo(8)
          obj.value = indexObj.name + '-again-' + this.randRo(8)
          this.data.cardList[this.data.tabIndex].children.push(obj)
        }
        this.setData({
          status: 1,
          showloadingBottom: false,
          cardList: this.data.cardList
        })
      }, 2000)
    }
  },
  // 随机数
  randRo(n) {
    var chars = ['1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f', 'g']
    let str = ''
    for (var i = 0; i < n; i++) {
      var id = Math.ceil(Math.random() * 9)
      str += chars[id]
    }
    return str
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