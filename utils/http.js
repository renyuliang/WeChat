// 封装请求
// 如果需要导入其他模块js变量或者方法，使用如：
// import {config} from '../config.js'
// config 表示 参数名称，如需使用方法，同上 引入, 需要使用相对路径
class HTTP {
  request(params){
    // 类型为GET时，设置默认 
    if (!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json'
      },
      success:(res) => {
        // 判断状态码
        let code = res.statusCode.toString()
        // 如果状态码 开头是2
        if (code.startsWith('2')) {
          // 判断是否传入 success 回调函数，如果不传，没事，传入后，执行回调
          params.success && params.success(res.data)
        } else {
          // 服务器报错
          wx.showToast({
            title: '服务器报错了，快去处理吧',
            duration: 2000
          })
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络异常',
          duration: 2000
        })
      }
    })
  }
}

export {HTTP}

// 第一种方法，

// 页面 调用 http 请求数据,流程如下:
// 1. import {HTTP} from '../http.js'  文件路径是相对路径
// 2. let http = new HTTP()
// 3. http.request({
//     url: '...',
//     data: '...',
//     success: (res) => {
//      console.log(res)
//     }
//    })

// 注： success 回调函数 可不传



// 第二种方法（推荐）,模块化管理

// 新建 models 目录，里面新建js文件，如 demo.js，表示请求 详情页 的数据
// 1. 引入 封装的 http 数据请求，如 import {HTTP} from '../http.js'  文件路径是相对路径
// demoModel 文件名称
// class demoModel extends HTTP {
//   // demo 函数名称，传入参数 和 确定回调函数
//   demo(id,name,IscallBack) {
//     this.request({
//       url: '...',
//       method: 'POST,
//       data:{
//         id: id,
//         name: name
//       },
//       // success 回调函数 可不传
//       success: (res) => {
//         IscallBack(res)
//       }
//     })
//   }
// }

// export { demoModel}

// 2. 在page 页面 ，调用 新建 的 models 文件下面的 detail.js 文件
// 引入并赋值
// import {demoModel} from '../models/demo.js'
// let initDemoModel = new demoModel()
// // 使用
// initDemoModel.demo(1,'阿亮',(res)=>{

// })