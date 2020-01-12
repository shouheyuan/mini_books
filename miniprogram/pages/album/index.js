// miniprogram/pages/album/index.js
const app = getApp()
import {
  tabs
} from '../../data/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs,
    total: 1,
    bags: [],
    isAt: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function() {
    await this.getRead()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  go(e) {
    wx.vibrateShort({
      complete: () => {
        app.go(e).then(res => {})
      }
    })
  },
  getRead() {
    app.$cloud('album', {
      action: 'getRead'
    }).then(res => {
      this.setData({
        total: res.total,
        bags: res.list,
        isAt: true
      })
    }).catch(err => {

    })
  }
})