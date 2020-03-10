// components/upload/index.js
import {
  upload
} from '../../models/upload.js'
let getUpload = new upload()
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
    getFileList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 上传
    uploadFile() {
      // 模拟
      let that = this
      wx.chooseImage({
        success(res) {
          const tempFilePaths = res.tempFilePaths
          tempFilePaths.forEach((item, i) => {
            that.data.getFileList = that.data.getFileList.concat(item)
          })
          // 传图片返回值 到 页面
          that.triggerEvent('uploadList', {
            list: that.data.getFileList
          }, {})
        }
      })

      // 实战
      // let that = this
      // wx.chooseImage({
      //   success(res) {
      //     const tempFilePaths = res.tempFilePaths
      //     wx.showLoading({
      //       title: '上传中...',
      //       icon: 'none'
      //     })
      //     tempFilePaths.forEach((item, i) => {
      //       // 批量上传
      //       getUpload.list(item, function(res) {
      //         let url = JSON.parse(res.data.url)
      //          that.data.getFileList = that.data.getFileList.concat(url)
      //       })
      //       // 判断是否上传完毕
      //       if (i === tempFilePaths.length - 1) {
      //         wx.hideLoading()
      //       }
      //     })
      //     // 传图片返回值 到 页面
      //     that.triggerEvent('uploadList', {
      //       list: that.data.getFileList
      //     }, {})
      //   }
      // })
    }
  }
})