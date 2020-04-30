// 最多存入10个字符串到数组中  --   特定业务
class setStorage {
  key = 'answer'
  maxLength = 10
  
  getHistory() {
    const words = wx.getStorageSync(this.key)
    if (!words) {
      return []
    }
    return words
  }

  setToStorage(word){
    const arr = this.getHistory()
    const has = arr.includes(word)
    if (!has) {
      if (arr.length >= this.maxLength) {
        // 删除组件 末尾元素
        arr.pop()
      }
      arr.unshift(word)
      wx.setStorageSync(this.key, arr)
    }
  }
}

export { setStorage }