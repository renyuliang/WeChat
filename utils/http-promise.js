// 封装请求
// 如果需要导入其他模块js变量或者方法，使用如：
// import {config} from '../config.js'
// config 表示 参数名称，如需使用方法，同上 引入, 需要使用相对路径
class HTTP {
  request({url, data = {}, method = "GET"}){
    return new Promise((resolve,reject)=>{
      this._request(url, resolve, reject,data,method)
    })
  }
  _request(url, resolve,reject,data={},method="GET") {
    // 类型为GET时，设置默认 
    // if (!params.method) {
    //   params.method = "GET"
    // }
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        // 判断状态码
        const code = res.statusCode.toString()
        // 如果状态码 开头是2
        if (code.startsWith('2')) {
          // 判断是否传入 success 回调函数，如果不传，没事，传入后，执行回调
          resolve(res.data)
        } else {
          reject()
          // 服务器报错
          wx.showToast({
            title: '服务器报错了，快去处理吧',
            duration: 2000
          })
        }
      },
      fail: (err) => {
        reject()
        wx.showToast({
          title: '网络异常',
          duration: 2000
        })
      }
    })
  }
}

export { HTTP }