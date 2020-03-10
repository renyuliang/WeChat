// 文件上传
class upload {

  list(params) {
    // 批量上传
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: params,
      name: 'file',
      formData: {},
      success(res) {
        callback(res)
      }
    })
  }
}

export {
  upload
}