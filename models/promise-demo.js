import { HTTP } from '../utils/http-promise.js'

class promiseModel extends HTTP {
  demo(cloth) {
    // get
    // return this.request({
    //   url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + cloth
    // })

    return this.request({
      url: 'https://suggest.taobao.com/sug?code=utf-8',
      data: {
        q: cloth
      }
    })

    // post
    // return this.request({
    //   url: 'https://suggest.taobao.com/sug?code=utf-8&q=',
    //   data: {
    //     name: name
    //   },
    //   method: 'POST'
    // })
  }
}

export { promiseModel }