// 定义需要复用的组件属性、方法
let beh = Behavior({
  properties: {
    img: String,
    title: String
  },
  attached:function(){

  },
  data: {

  },
  methods: {
    setNum(){
      console.log('我是 behaviors.js 中的方法')
    }
  }
})

export { beh }

// 如何使用
// import {beh} from '...../behavior.js'
// 数组中调用
// behaviors: [beh]

// 页面中，直接使用 方法，如：
// this.setNum()