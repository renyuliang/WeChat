// components/imgList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    centerList: {
      type: Array,
      value: ''
    }
  },

  attached(){
    this.properties.centerList.forEach((item) => {
      if (item.children) {
        this.data.selected.push(false)
      }
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: [], // 这里表示列表项是否展开，默认初始时此数组的元素全为fasle，表示都没展开
    active: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showChild(e) {
      let index = e.currentTarget.dataset.index;
      let active = this.data.active;
      this.setData({
        [`selected[${index}]`]: !this.data.selected[`${index}`],
        active: index
      });

      // 如果点击的不是当前展开的项，则关闭当前展开的项
      // 这里就实现了点击一项，隐藏另一项
      if (active !== null && active !== index) {
        this.setData({ [`selected[${active}]`]: false });
      }
    },
    navigateTo(e){
      let path = e.currentTarget.dataset.path
      this.triggerEvent('navigateTo', {
        path: path
      }, {})
    }
  }
})
