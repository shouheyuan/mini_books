// components/kindTitle/index.js
import {
  tabs
} from '../../data/index.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    kind: {
      type: Number,
      observer: function (val) {
        this.setData({
          kindTitle: tabs.find(f => f.kind === val)['title']
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})