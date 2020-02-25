// components/pageList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData: {
      type:Array,
      value: ''
    },
    showlength: {
      type: Number,
      value: 0
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
    tapDetail(e){
      let item = e.currentTarget.dataset.item
      this.triggerEvent('getDetail', {
        detail: item
      }, {})
    }
  }
})
