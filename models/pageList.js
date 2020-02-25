import { HTTP } from '../utils/http-promise.js'

class getList extends HTTP {
  list() {
    return this.request({
      url: 'https://unidemo.dcloud.net.cn/api/news?column=id%2Cpost_id%2Ctitle%2Cauthor_name%2Ccover%2Cpublished_at',
    })
  }
}

export { getList }