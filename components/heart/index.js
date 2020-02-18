// components/heart/index.js
import { beh } from '../behavior.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [beh],
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type:Number,
      observer:function(newVal, oldVal, changedPath){ // 处理这个变量的方法，可不写
        // 不要在observer方法中修改自身属性
        // 所以 count 改变时，修改data中 _coutn变量 的值

        // console.log(newVal)
        // console.log(oldVal)
        // console.log(changedPath)
        let val = newVal < 10 ? '0'+newVal : newVal
        this.setData({
          _count: val
        })
        // console.log(val)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrl: '../images/like.png',
    imgUrled: '../images/liked.png',
    _count:''
  },

  //生命周期函数 组件进入页面时 执行
  attached:function(){
    // console.log('组件进入页面时 执行')
    // 调用 behavior.js中的方法
    this.setNum()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      let like = this.properties.like
      let count = this.properties.count
      // 判断count数量
      count = like ? count - 1 : count + 1
      // 更新数据
      this.setData({
        count: count,
        like: !like
      })

      // 自定义事件，用在外部，调用该组件时，点击该组件的触发事件
      // 自定义内容
      let behavior = this.properties.like ? 'like' : 'cancel'
      // 激活 第一个参数为 自定义事件的点击名称，第二个参数为传入的自定义内容，第三个参数不传
      this.triggerEvent('like',{
        behavior: behavior
      },{})
    }
  }
})
