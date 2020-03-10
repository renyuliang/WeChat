// components/countdown/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 设置节点
    dateToNow: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    countDown: ['00', '00', '00', '00'],
    seconds: 0
  },

  attached() {
    this.showCountDown()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showCountDown() {
      // 获取指定日期距离现在的秒数
      let date1 = new Date()
      var date2 = new Date(this.properties.dateToNow)
      let seconds = Math.floor((date2.getTime() - date1.getTime()) / 1000)
      this.setData({
        seconds: seconds
      })

      var totalSecond = this.data.seconds; //倒计时时间
      let updateArr = []

      var interval = setInterval(function () {
        // 秒数
        var second = totalSecond;

        // 天数位
        var day = Math.floor(second / 3600 / 24);
        var dayStr = day.toString();
        if (dayStr.length == 1) dayStr = '0' + dayStr;

        // 小时位
        var hr = Math.floor((second - day * 3600 * 24) / 3600);
        var hrStr = hr.toString();
        if (hrStr.length == 1) hrStr = '0' + hrStr;

        // 分钟位
        var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
        var minStr = min.toString();
        if (minStr.length == 1) minStr = '0' + minStr;

        // 秒位
        var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
        var secStr = sec.toString();
        if (secStr.length == 1) secStr = '0' + secStr;


        updateArr.push(dayStr)
        updateArr.push(hrStr)
        updateArr.push(minStr)
        updateArr.push(secStr)

        this.setData({
          countDown: updateArr
        });
        totalSecond--;
        if (totalSecond < 0) {
          clearInterval(interval);
          let newArr = ['00', '00', '00', '00']
          this.setData({
            countDown: newArr
          });
          // 指定完成事件
          this.triggerEvent('countOver',{},{})
        } else {
          updateArr = []
        }
      }.bind(this), 1000);
    }
  }
})
