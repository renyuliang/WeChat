// components/input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    initType: {
      type: String,
      value: 'text'
    },
    placeholder: {
      type: String,
      value: ''
    },
    inputLength: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputName: '',
    savelength: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInput(e) {
      let regval = e.detail.value.replace(/\s+/g, '')
      let length = 0
      if (regval.length > this.properties.inputLength) {
        length = this.properties.inputLength
        regval = regval.substring(0, this.properties.inputLength)
      } else {
        length = regval.length
      }
      this.setData({
        inputName: regval,
        savelength: length
      })
      // 传值 回去
      this.triggerEvent('value', {
        value: regval
      }, '')
    }
  }
})