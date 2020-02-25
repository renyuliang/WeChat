// 表单验证js

// 输入框非空
function vName(e, text) {
  let val = e
  if (!val) {
    if (text) {
      wx.showToast({
        title: text,
        icon: 'none'
      })
    }
    return false
  }
  return true
}

// 去掉输入框 所有空格
function vNameInput(e) {
  let val = e
  return val.replace(/\s+/g, "")
}

// 验证手机号
function vPhone(e, text1, text2) { //text1:手机号码为11位, text2:手机号码有误
  let val = e
  let reg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (e.length !== 11) {
    if (text1) {
      wx.showToast({
        title: text1,
        icon: 'none'
      })
    }
    return false
  }
  if (!reg.test(val)) {
    if (text2) {
      wx.showToast({
        title: text2,
        icon: 'none'
      })
    }
    return false
  }
  return true
}

//多选框验证
function vCheckbox(e, text) {
  if (e.length <= 0) {
    if (text) {
      wx.showToast({
        title: text,
        icon: 'none'
      })
    }
    return false
  }
  return true
}

module.exports = {
  vName,
  vNameInput,
  vCheckbox,
  vPhone
}