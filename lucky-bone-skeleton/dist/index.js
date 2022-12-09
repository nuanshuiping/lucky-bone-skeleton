// compoents/v2.0.3/LB-skeleton/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectClass: {
      type: String,
      value: ''
    },
    showLBSk: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    skeletonRegion: []
  },
  /**
   * 组件渲染完成
   */
  lifetimes: {
    ready: function() {
      // setTimeout(() => {
        this._rectHandle();
      // }, 1000)
    }
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    _rectHandle() {
     
        wx.createSelectorQuery().selectAll(`.${this.data.selectClass} .${this.data.selectClass}_rect`).fields({
          size: true,
          dataset: true,
          rect: true,
          computedStyle: ['borderRadius'],
          },(res) => {
            console.log(res, '=====sss')
            this.setData({skeletonRegion: res})
        }).exec()
    }
  }
})
