// components/init-dialog/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    // 控制弹窗显示
    showModal: {
      type: Boolean,
      value: false
    },
    // 弹窗标题
    title: {
      type: String,
      value: ''
    },
    // 默认显示2个按钮，为true时，按钮消失，右上角 X 显示
    showBtn: {
      type: Boolean,
      value: false
    },
    //控制底部是一个按钮还是两个按钮，默认两个
    single: {
      type: Boolean,
      value: false
    },
    // 取消 的文案
    cacelText: {
      type: String,
      value: '取消'
    },
    // 确定 的文案
    confirmText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    preventTouchMove() {},
    iconExit() {
      this.setData({ showModal: false })
    },
    // 点击取消按钮的回调函数
    cancel() {
      this.setData({ showModal: false })
      this.triggerEvent('cancel')  //triggerEvent触发事件
    },
    // 点击确定按钮的回调函数
    confirm() {
      this.setData({ showModal: false })
      this.triggerEvent('confirm')
    }
  }
})
