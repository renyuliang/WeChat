// components/imgList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    centerList: {
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
    navigateTo(e){
      let path = e.currentTarget.dataset.path
      this.triggerEvent('navigateTo', {
        path: path
      }, {})
    }
  }
})
