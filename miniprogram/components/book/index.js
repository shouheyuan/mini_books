// components/book/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    props: Object
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
    go(e) {
      wx.vibrateShort({
        complete: () => {
          console.log(e)
          app.go(e).then(res => {})
        }
      })
    }
  }
})