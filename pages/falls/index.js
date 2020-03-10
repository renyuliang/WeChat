// pages/falls/index.js
let col1H = 0;
let col2H = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        //加载首组图片
        this.loadImages();
      }
    })
  },
  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        img.height = imgHeight
        imageObj = img;
        break;
      }
    }

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    //判断当前图片添加到左列还是右列
    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);
  },

  loadImages: function () {
    let images = [
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/1.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/2.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/3.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/4.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/5.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/6.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/7.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/8.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/9.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/10.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/11.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/12.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/13.png?raw=true", height: 0 },
      { pic: "https://github.com/zarknight/wx-falls-layout/blob/master/images/14.png?raw=true", height: 0 }
    ];
    // let images = [
    //   { pic: "./1.png", height: 0 },
    //   { pic: "./2.png", height: 0 },
    //   { pic: "./3.png", height: 0 },
    //   { pic: "./4.png", height: 0 },
    //   { pic: "./5.png", height: 0 },
    //   { pic: "./6.png", height: 0 },
    //   { pic: "./7.png", height: 0 },
    //   { pic: "./8.png", height: 0 },
    //   { pic: "./9.png", height: 0 },
    //   { pic: "./10.png", height: 0 },
    //   { pic: "./11.png", height: 0 },
    //   { pic: "./12.png", height: 0 },
    //   { pic: "./13.png", height: 0 },
    //   { pic: "./14.png", height: 0 }
    // ];

    let baseId = "img-";

    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + i;
    }

    this.setData({
      loadingCount: images.length,
      images: images
    });
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