// miniprogram/pages/detail/index.js
import colorThief from "miniapp-color-thief"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookid: '',
    item: {},
    // 背景颜色
    palette: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options && options.id) {
      this.setData({
        bookid: options.id
      })
      this.getDetail()
    } else {
      app.$message('没有id提示')
    }
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

  },
  /* 获取详情 */
  getDetail() {
    let {
      bookid
    } = this.data
    app.$cloud('detail', {
      action: 'getDetail',
      bookid
    }).then(res => {
      this.setData({
        item: res.data
      })
      setTimeout(() => {
        this.getBackGrounpColor()
      }, 500)
    })
  },
  read(e) {
    let {
      bookid
    } = this.data
    let _this = this
    app.$cloud('detail', {
      action: 'setRead',
      bookid
    }).then(res => {
      let key = 'item.isRead'
      let data = _this.data.item.isRead === 1 ? 0 : 1 
      _this.setData({
        [key]: data
      })
    })
  },
  getBackGrounpColor() {
    const data = this.data.item.cover
    wx.getImageInfo({
      src: data,
      success: res => {
        const ctx = wx.createCanvasContext('myCanvas')
        ctx.drawImage(res.path, 0, 0, 300, 150)
        ctx.draw(false, () => {
          wx.canvasGetImageData({
            canvasId: "myCanvas",
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            success: res => {
              let palette = colorThief(res.data)
                .color()
                .getHex();
              this.setData({
                palette: palette
              })
              wx.setNavigationBarColor({
                frontColor: '#ffffff',
                backgroundColor: palette
              })
            }
          })
        })
      }
    })
  }
})