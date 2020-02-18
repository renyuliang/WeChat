// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String, // 名称
    first: Boolean,// 是否是第一个
    firstIndex: {
      type: Number,
      value: 0
    },
    last: Boolean, // 是否是最后一个
    lastIndex: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal, changedPath) { // 处理这个变量的方法，可不写
        console.log(newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftImg: '../images/triangleft.png',
    disleftImg: '../images/triangle.disleft.png',
    rightImg: '../images/triangright.png',
    disrightImg: '../images/triangle.disright.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPrev:function(){
      // 自定义事件
      if (!this.properties.first) {
        let index = this.properties.firstIndex
        this.triggerEvent("prev", {
          index: index
        }, {})
      }
    },
    onNext:function(){
      // 自定义事件
      if (!this.properties.last) {
        let index = this.properties.lastIndex
        this.triggerEvent("next", {
          index: index
        }, {})
      }
    }
  }
})
