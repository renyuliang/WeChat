import { codeModel } from '../../models/code.js'
let getCode = new codeModel()
Component({
  externalClasses: ['init-code'],
  /**
   * 组件的属性列表
   */
  properties: {
    codeUrl: {
      type: String,
      value: ''
    },
    phone: {
      type: Number,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 防止重复点击
    getAgain: true,
    codeText: '获取验证码',
    disabled: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getCode() {
      if (this.data.getAgain) {
        let second = 60
        this.setData({
          getAgain: false,
          disabled: true
        })
        var time = setInterval(() => {
          second--;
          this.setData({
            codeText: second+"秒后重发"
          })
          if (second <= 0) {
            this.setData({
              codeText: "获取验证码",
              getAgain: true,
              disabled: false
            })
            clearInterval(time)
          }
        }, 1000)
        // 发送请求
        getCode.list(this.properties.codeUrl,this.properties.phone).then(res=>{console.log(res)})
      }
    },
  }
})