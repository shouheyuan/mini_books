// miniprogram/pages/netdisc/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    Search_list: [],
    Recom_list: [],
    searck_change: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRecom()
  },
  onShareAppMessage: function () {

  },
  // 输入时
  changeSearchFunc(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  getPan(e) {
    wx.showModal({
      title: '提示',
      content: '点击复制，打开浏览器粘贴访问',
      confirmText: '复制',
      success(res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: e.currentTarget.dataset.pan
          })
          console.log( e.currentTarget.dataset.pan)
        }
      }
    })

  },
  // 点击提交时
  searchFunc(e) {
    let selnum = e.detail.value;
    if(selnum === '') {
      return false
    }
    this.getSearchFunc()
  },
  // 搜索
  async getSearchFunc() {
    let keyword = this.data.keyword
    app.$cloud('netdisc', {
      action: 'index',
      keyword
    }).then(res => {
      this.setData({
        Search_list: res.data,
        searck_change: true
      })
    })
  },

  // 推荐
  getRecom() {
    app.$cloud('netdisc', {
      action: 'package',
    }).then(res => {
      this.setData({
        Recom_list: res.data
      })
    })
  }
  
  
})