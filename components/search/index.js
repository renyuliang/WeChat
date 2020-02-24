import {
  setStorage
} from '../../models/setStorage.js'
// import { demoModel } from '../../models/demo.js'
let demoStorage = new setStorage()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // start:0,
    // count:20,
    showImg: false,
    inputVal: '',
    loadingCenter: false,
    historyKeys: []
  },

  attached: function() {
    this.setData({
      historyKeys: demoStorage.getHistory()
    })
  },

  /**
   * 组件的方法列表
   * 
   */
  methods: {
    onCancel: function(event) {
      this.triggerEvent('cancel', {}, {})
    },

    onDelete: function(event) {
      this.setData({
        inputVal: '',
        showImg: false
      })
    },

    onInput(event) {
      let le = event.detail.value.length > 0 ? true : false
      this.setData({
        showImg: le
      })
    },

    // 点击tag标签
    onTapping(val) {
      console.log(val.detail.text)
    },

    onConfirm: function(event) {
      // 首先切换状态，保持客户端流畅
      if (event.detail.value) {
        this.setData({
          loadingCenter: true
        })
        setTimeout(() => {
          this.setData({
            loadingCenter: false
          })
          // 写入缓存
          demoStorage.setToStorage(event.detail.value)
        }, 2000)
      }

    }
  }
})