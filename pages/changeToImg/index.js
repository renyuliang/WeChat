Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    resultComment: '学霸' //测试数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // 测试数据
    let real_name = '张三';
    let id_card = '123123';
    let school_id = 666
    let winWidth = wx.getSystemInfoSync().windowWidth;// 获取当前设备的可视宽度
    let winHeight = wx.getSystemInfoSync().windowHeight;// 获取当前设备的可视高度
    that.setData({
      winWidth: winWidth,
      winHeight: winHeight
    })

    //绘制canvas图
    let promise1 = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: '/assets/1.jpg',
        success: function (res) {
          console.log(res)
          resolve(res);
        }
      })
    });
    let promise2 = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: '/assets/icon_avatar_girl.png',
        success: function (res) {
          console.log(res)
          resolve(res);
        }
      })
    });
    Promise.all([
      promise1, promise2
    ]).then(res => {
      console.log(res)
      console.log(res[1].width / 4)
      const ctx = wx.createCanvasContext('shareImg')

      //主要就是计算好各个图文的位置，利用当前设备的宽高度对图片和文字进行居中
      // ctx.drawImage('/' + res[0].path, 0, 0, that.data.winWidth, that.data.winHeight - 70)
      // ctx.drawImage('/' + res[1].path, (that.data.winWidth / 2 - 120), 50, 240, 150)
      // 第一张 背景图
      // ctx.drawImage('/' + res[0].path, 0, 0, that.data.winWidth, that.data.winHeight)
      // ctx.drawImage('/' + res[1].path, (that.data.winWidth / 4), 0, that.data.winWidth / 2, that.data.winWidth / 2)
      ctx.beginPath()
      ctx.rect(0, 0, that.data.winWidth - 0, that.data.winHeight - 0);
      ctx.setFillStyle("#ffffff") //设置的背景颜色
      // ctx.setStrokeStyle('red') // 设置边框颜色
      // ctx.setShadow(10, 10, 20, 'blue') // 边框阴影
      ctx.fill();

      // ctx.drawImage('/' + res[0].path, 0, 0, that.data.winWidth, that.data.winHeight)
      // 头像
      ctx.drawImage('/' + res[1].path, ((that.data.winWidth / 2) - ((res[1].width / 4)/2)), 20, res[1].width / 4, res[1].height / 4)

      // for(var i = 0; i < 3; i++) {
      //   console.log(i)
      //   // 创建背景矩形
      //   ctx.setStrokeStyle('#ff0000')
      //   ctx.strokeRect(50, 250*i, 150, 75)

      //   ctx.setTextAlign('left')
      //   ctx.setFillStyle('#000')
      //   ctx.setFontSize(14)
      //   ctx.fillText(`身份证号码是${i}：` + id_card, 60, (250*i)+50)
      // }

      // 创建背景矩形
      ctx.setStrokeStyle('#ff0000')
      ctx.strokeRect(20, 200, that.data.winWidth - 40, 160)

      ctx.setTextAlign('left')
      ctx.setFillStyle('#000')
      ctx.setFontSize(14)
      ctx.fillText('身份证号码：' + id_card, 40, 240)

      ctx.setTextAlign('left')
      ctx.setFillStyle('#000')
      ctx.setFontSize(14)
      ctx.fillText('培训学校：' + school_id, 40, 280)

      ctx.setTextAlign('left')
      ctx.setFillStyle('#000')
      ctx.setFontSize(14)
      ctx.fillText('成绩评定：' + that.data.resultComment, 40, 320)

      // ctx.setStrokeStyle('#ff0000')
      // ctx.strokeRect(50, 350, 150, 75)

      // ctx.setTextAlign('left')
      // ctx.setFillStyle('#000')
      // ctx.setFontSize(14)
      // ctx.fillText('培训学校：' + school_id, 60, 400)
      // ctx.rect(50, 50, (that.data.winWidth) / 1.5, (that.data.winHeight) / 3)
      

      // ctx.setTextAlign('center')
      // ctx.setFillStyle('#000')
      // ctx.setFontSize(22)
      // ctx.fillText(real_name, (that.data.winWidth) / 2, ((that.data.winHeight) / 2) - 30)

      // ctx.setTextAlign('left')
      // ctx.setFillStyle('#000')
      // ctx.setFontSize(14)
      // ctx.fillText('身份证号码：' + id_card, 70, ((that.data.winHeight) / 2) + 20)
      // ctx.fillText('培训学校：' + school_id, 70, ((that.data.winHeight) / 2) + 50)
      // ctx.fillText('成绩评定：' + that.data.resultComment, 70, ((that.data.winHeight) / 2) + 80)

      // ctx.setStrokeStyle('blue')
      // ctx.strokeRect(10, 10, 150, 75)

      // ctx.setStrokeStyle('red')
      // ctx.strokeRect(50, 50, 150, 75)

      // ctx.stroke()
      ctx.draw()
    })
  },
  start(e) {
    console.log(e.touches[0].x,e.touches[0].y)
  },
  move(e) {
    console.log(e.touches[0].x, e.touches[0].y)
  },
  /**
   * 保存到相册
  */
  save: function () {
    var that = this;
    //获取相册授权
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              that.savaImageToPhoto();
            }
          })
        } else {
          that.savaImageToPhoto();
        }
      }
    })
  },

  savaImageToPhoto: function () {
    let that = this;
    wx.showLoading({
      title: '图片生成中...'
    })
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: (that.data.winWidth)*2,
      height: (that.data.winHeight)*2,
      destWidth: (that.data.winWidth) * 2,
      destHeight: (that.data.winHeight) * 2,
      canvasId: 'shareImg',
      success: function (res) {
        wx.hideLoading()
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '已保存到系统相册',
            })
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
})