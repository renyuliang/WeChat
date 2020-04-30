import {
  cityModel
} from '../../models/city.js'
import * as storage from '../../models/storage.js'
let getCityList = new cityModel()
let storagekey = 'city'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showImg: false,
    inputVal: '',
    loadingCenter: false,
    getHeight: 0,
    scrollInto: '',
    // 字母列表
    listIndex: [],
    // 城市列表
    cityList: [{
        title: "A",
        child: [{
            name: '澳门'
          },
          {
            name: '阿勒泰机场'
          }
        ]
      },
      {
        title: 'B',
        child: [{
            name: '保定'
          },
          {
            name: '包头机场'
          },
          {
            name: '北京南苑机场'
          }
        ]
      },
      {
        title: 'C',
        child: [{
            name: '长白山机场'
          },
          {
            name: '长春龙嘉国际机场'
          },
          {
            name: '成都双流国际机场'
          }
        ]
      },
      {
        title: 'D',
        child: [{
            name: '大理机场'
          },
          {
            name: '达州河市机场'
          }
        ]
      },
      {
        title: 'E',
        child: [{
            name: '二连浩特赛乌苏国际机场'
          },
          {
            name: '鄂尔多斯机场'
          }
        ]
      },
      {
        title: 'F',
        child: [{
            name: '阜阳西关机场'
          },
          {
            name: '福州长乐国际机场'
          }
        ]
      },
      {
        title: 'G',
        child: [{
            name: '格尔木机场'
          },
          {
            name: '贵阳龙洞堡国际机场'
          }
        ]
      }
    ],
    currentCity: '成都市',
    demoList: [] // 模拟假的数据，替换为真的就行
  },

  attached: function() {
    // 调用 获取数据
    this.returnCityList('裤子')
    // 调用字母列表
    this.productA_Z()
    // 调用 设置高度
    this.setheight()
  },

  /**
   * 组件的方法列表
   * 
   */
  methods: {
    //生成A-Z的字母列表
    productA_Z() {
      let arr = []
      for (var i = 0; i < 26; i++) {
        arr.push(String.fromCharCode(65 + i))
      }
      this.setData({
        listIndex: arr
      })
    },
    // 滚动到指定位置
    tapToIndex(e) {
      let tapOne = e.target.dataset.item
      this.setData({
        scrollInto: tapOne
      })
    },
    // 设置列表高度
    setheight() {
      let that = this
      wx.createSelectorQuery().in(this).selectAll('.myCity,.header').boundingClientRect(function(rect) {
        let height = (rect[0].height + rect[1].height)
        that.setData({
          getHeight: wx.getSystemInfoSync().windowHeight - height
        })
      }).exec()
    },
    getUserLocation() {
      let vm = this
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
            wx.showModal({
              title: '请求授权当前位置',
              content: '需要获取您的地理位置，请确认授权',
              success: function(res) {
                if (res.confirm) {
                  wx.openSetting({
                    success: (dataAu) => {
                      if (dataAu.authSetting["scope.userLocation"] == true) {
                        wx.showToast({
                          title: '授权成功',
                          icon: 'success',
                          duration: 1000
                        })
                        vm.getLocation()
                      }
                    }
                  })
                }
              }
            })
          } else {
            vm.getLocation()
          }
        }
      })
    },
    // 获取地址
    getLocation() {
      wx.getLocation({
        type: 'gcj02',
        success: (res) => {
          console.log(res)
        }
      })
    },
    // 删除xx
    onDelete: function(event) {
      this.setData({
        inputVal: '',
        showImg: false
      })
    },
    // 监听
    onInput(event) {
      let le = event.detail.value.length > 0 ? true : false
      this.setData({
        showImg: le
      })
    },
    // 获取数据
    returnCityList(e) {
      this.setData({
        loadingCenter: true
      })
      if (storage.get(storagekey)) {
        this.setData({
          loadingCenter: false,
          demoList: storage.get(storagekey)
        })
      } else {
        getCityList.list(this.properties.url, e).then(res => {
          this.setData({
            loadingCenter: false,
            demoList: res.result
          })
          storage.set(storagekey, res.result)
        })
      }
    },
    // 确认
    onConfirm: function(event) {
      // 首先切换状态，保持客户端流畅
      if (event.detail.value) {
        this.setData({
          loadingCenter: true
        })
        this.returnCityList(event.detail.value)
      }
    }
  }
})