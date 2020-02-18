import {HTTP} from '../utils/http.js'

class demoModel extends HTTP {
  demo (cloth,isCallBack) {
    this.request({
      url: 'https://suggest.taobao.com/sug?code=utf-8',
      data: {
        q: cloth
      },
      success:(res)=>{
        isCallBack(res)
      }
    })
  }
}

export {demoModel}