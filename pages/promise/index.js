// 模拟真实数据，从服务器获取（开元json数据）
import { promiseModel } from '../../models/promise-demo.js'

let promiseDemo = new promiseModel()
// pages/promise/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 1,
        name: '测试跳转1'
      },
      {
        id: 2,
        name: '测试跳转2'
      },
      {
        id: 3,
        name: '测试跳转3'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 练习
    // promise 是对象，可以保存状态
    // promise 第一步
    // 异步代码 ，写在promise函数中，第二步
    const promise = new Promise((resolve,reject)=>{
      // pending fulfilled rejected
      // 进行中   成功      失败
      // new一个promise之后，状态处于 pending
      // 简写
      wx.getSystemInfo({
        success:res=>resolve(res), // 把pending 修改成 fulfilled
        fail:error=>reject(error) // 把pending 修改成 rejected
      })
      // wx.getSystemInfo({
      //   success:(res)=> {
      //     resolve(res)
      //   },
      //   fail:(error)=>{
      //     reject(error)
      //   }
      // })
    })

    // 使用promise
    // 简写
    promise.then(
      res => console.log('成功', res),
      error => console.log('失败', error)
    )
    // promise.then((res)=>{
    //   // 成功操作
    //   console.log('成功',res)
    // },(error)=>{
    //   // 失败操作
    //   console.log('失败',error)
    // })



    // promise用法 模拟真实数据，从服务器获取（开元json数据）

    // 定义变量接收 promise   第一种方法
    // const getPromiseDemo = promiseDemo.demo('牛仔裤')
    // getPromiseDemo.then(
    //   res=>console.log(res.result)
    // )

    // 直接调用    第二种方法
    // promiseDemo.demo('牛仔裤')
    // .then(
    //   res=> {
    //     console.log(res.result)
    //   }
    // )



    // promise 正确用法
    // 如，需要链式调用接口，即api1调用成功之后，调用api2，api2调用成功之后，调用api3,无限调用，为链式调用
    const getPromiseDemo = promiseDemo.demo('牛仔裤')
    getPromiseDemo.then(
      res => {
        console.log("第1次调用(不是promise的正确调用方式)",res.result)
        getPromiseDemo.then(
          res => {
            console.log("第2次调用(不是promise的正确调用方式)",res.result)
            getPromiseDemo.then(
              res => {
                console.log("第3次调用(不是promise的正确调用方式)",res.result)
              }
            )
          }
        )
      }
    )
    // 上面的调用方式，结果没毛病，但不是promise的正确调用方式

    // 如下 为 promise 的正确调用方法
    promiseDemo.demo('短袖')
    .then(res=>{
      // this.setdata({list: res.result})
      console.log("第1次调用(promise的正确调用方式)", res.result)
      return promiseDemo.demo('长裙')
    })
    .then(res=>{
      // this.setdata({list2: res.result})
      console.log("第2次调用(promise的正确调用方式)", res.result)
    })
    // 后面 则 以此类推

    // promise.all() 的调用方式 并行请求（同时请求）
    // let demo1 = promiseDemo.demo('男裤')
    // let demo2 = promiseDemo.demo('女裤')
    // Promise.all([demo1,demo2])
    // .then(res=>{
    //   console.log('Promise.all() 的调用方式（并行请求）:', res)
    // })

    // Promise.race(), 竞争，及对比哪个请求率先完成，则返回先完成的请求的结果,调用方式 和 Promise.all()相同
  },
  navigateToNext(event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/getOption/index?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})