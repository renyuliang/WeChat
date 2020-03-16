import { HTTP } from '../utils/http-promise.js'

// 验证码接口
class codeModel extends HTTP {
  list(url,q) {
    return this.request({
      url: url,
      data: {
        q: q
      }
    })
  }
}

export { codeModel }