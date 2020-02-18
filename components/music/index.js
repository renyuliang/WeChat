// components/music/index.js

// 微信背景音频
const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrl: String,
    src: String,
    title: String,
    // 当前音频的索引
    srcIndex: {
      type: Number,
      value: 0
    },
    // 音频数据源的条数（有几首歌）
    srctotal: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgPause: '../images/musicStop.png',
    imgPlay: '../images/musicPlay.png',
    playing: false, // 判断是否处于播放状态
    disabledNext: false,
    disabledPrev: true
  },

  attached: function () {
    this._recoverPlaying()
    this._monitorSwitch()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(){
      const that = this
      if (!that.data.playing) {
        that.setData({
          playing: true
        })
        if (mMgr.src == that.properties.src) {
          mMgr.play()
        }
        else {
          mMgr.src = that.properties.src
        }
        mMgr.title = that.properties.title
      } else {
        that.setData({
          playing: false
        })
        mMgr.pause()
      }
    },
    // 播放 控制状态
    _recoverPlaying:function(){
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src === this.properties.src) {
        if (!mMgr.paused) {
          this.setData({
            playing: true
          })
        }
      }
    },
    // wx 控制后台播放状态
    _monitorSwitch: function () {
      mMgr.onPlay(() => {
        this._recoverPlaying()
      })
      mMgr.onPause(() => {
        this._recoverPlaying()
      })
      mMgr.onStop(() => {
        this._recoverPlaying()
      }),
      // 自然播放结束，然后下一首
      mMgr.onEnded(() => {
        this._recoverPlaying()
        this.musicNext()
        this.onPlay()
      })
    },
    // 上一首
    musicPrev:function(){
      let behavior = this.properties.srcIndex
      behavior = behavior - 1
      this.triggerEvent('musicPrev',{
        behavior:behavior
      },{})
      this.playStatus()
      // 判断是否是第一首歌
      if (behavior === 0) {
        this.setData({
          disabledNext: false,
          disabledPrev: true
        })
      } else {
        this.setData({
          disabledNext: false,
          disabledPrev: false
        })
      }
    },
    // 下一首
    musicNext:function(){
      let behavior = this.properties.srcIndex
      behavior = behavior + 1
      this.triggerEvent('musicNext', {
        behavior: behavior
      }, {})
      this.playStatus()
      // 判断是否是最后一首歌
      if (behavior === this.properties.srctotal) {
        this.setData({
          disabledNext: true,
          disabledPrev: false
        })
      } else {
        this.setData({
          disabledNext: false,
          disabledPrev: false
        })
      }
    },
    // 切换音频
    playStatus() {
      mMgr.pause()
      if (mMgr.src) {
        setTimeout(() => {
          this.onPlay()
        }, 300)
      }
    }
  }
})
