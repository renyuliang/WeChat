// pages/checkgroup/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: [],
    sumCount: 0, //总分
    checkboxArr: [{
        title: '1、标题标题标题标题（单选）',
        chooseOne: true,
        children: [{
          value: 'A',
          name: '单选-视频课视频课视频课视频课视频课视频课视频课视频课视频课',
          checked: false
        }, {
          value: 'B',
          name: '单选-选项2',
          checked: false
        }, {
          value: 'C',
          name: '单选-选项3',
          checked: false
        }, {
          value: 'D',
          name: '单选-选项4',
          checked: false
        }],
        saveQuestion: [],
        saveCount: 0,
        correctList: ['A']
      },
      {
        title: '2、标题标题标题标题（多选）',
        chooseOne: false,
        children: [{
          value: 'A',
          name: '多选-选项1',
          checked: false
        }, {
          value: 'B',
          name: '多选-选项2',
          checked: false
        }, {
          value: 'C',
          name: '多选-选项3',
          checked: false
        }, {
          value: 'D',
          name: '多选-选项4',
          checked: false
        }],
        saveQuestion: [],
        saveCount: 0,
        correctList: ["B", "D"]
      },
      {
        title: '3、欧斯柯达（单选）',
        chooseOne: true,
        children: [{
          value: 'A',
          name: '单选-视频1',
          checked: false
        }, {
          value: 'B',
          name: '单选-选项2',
          checked: false
        }, {
          value: 'C',
          name: '单选-选项平时开的发水电费',
          checked: false
        }, {
          value: 'D',
          name: '单选-选项4',
          checked: false
        }],
        saveQuestion: [],
        saveCount: 0,
        correctList: ['C']
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  checkbox: function(e) {
    var indexP = e.currentTarget.dataset.indexp; //获取当前父级的下标
    var indexC = e.currentTarget.dataset.indexc; //获取当前子级的下标
    var checkboxArr = this.data.checkboxArr; //选项集合
    checkboxArr.forEach((v, i) => {
      if (indexP === i) {
        if (v.chooseOne) {
          // 单选
          v.children.forEach((v2, i2) => {
            v2.checked = false
          })
          v.children[indexC].checked = true;
          // 存储选择的答案
          v.saveQuestion = []
          v.saveQuestion.push(v.children[indexC].value)
          // 判断得分
          if (v.correctList.includes(v.children[indexC].value)) {
            v.saveCount = 10
          } else {
            v.saveCount = 0
          }
          // 更新
          this.setData({
            checkboxArr: checkboxArr
          });
        } else {
          // 多选
          v.children[indexC].checked = !v.children[indexC].checked;
          // 存储选择的答案
          if (v.children[indexC].checked) {
            v.saveQuestion.push(v.children[indexC].value)
            v.saveQuestion = v.saveQuestion.sort()
          } else {
            let indexof = v.saveQuestion.indexOf(v.children[indexC].value)
            v.saveQuestion.splice(indexof, 1)
          }
          // 判断得分
          if (v.correctList.sort().toString() === v.saveQuestion.sort().toString()) {
            v.saveCount = 20
          } else {
            v.saveCount = 0
          }
          this.setData({
            checkboxArr: checkboxArr
          });
        }
      }
    })
  },
  confirm() {
    // 获取总分
    let sum = 0
    this.data.checkboxArr.forEach(item=>{
      sum += item.saveCount
    })
    this.setData({
      result: this.data.checkboxArr,
      sumCount: sum
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})