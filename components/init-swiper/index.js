// components/tabar/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  // swiper-flex 自定义内容样式
  // swiper - view  swiper-img 图片样式
  externalClasses: ['swiper-flex','swiper-view','swiper-img'],
  properties: {
    // 是否显示面板指示点
    indicatorDots: {
      type: Boolean,
      value: false
    },
    // 是否自动切换	
    autoplay: {
      type: Boolean,
      value: false
    },
    // 当前所在滑块的 index	
    tabIndex: {
      type: Number,
      value: 0
    },
    // 自动切换时间间隔	
    interval: {
      type: Number,
      value: 5000
    },
    // 是否采用衔接滑动
    circular: {
      type: Boolean,
      value: false
    },
    // 滑动方向是否为纵向
    vertical: {
      type: Boolean,
      value: false
    },
    // 数据
    cardList:{
      type: Array,
      value: ''
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
    //滑动swiper，改变选项卡
    changeSwiper(event) {
      this.triggerEvent('changeSwiper',{
        current: event.detail.current
      },{})
    }
  }
})