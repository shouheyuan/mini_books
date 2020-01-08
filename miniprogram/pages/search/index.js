// pages/search/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Search_history: [],
    Search_Result: [],
    Search_list: [],
    searck_change: false,
    searck_focus: false,
    searchKeyword: '',
    searchTitle: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getSearchLogFunc();
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
  // 输入时
  changeSearchFunc(e) {
    this.setData({
      searchKeyword: e.detail.value,
      searchTitle: e.detail.value,
    })
  },
  // 获取焦点时
  pushUpPage(e) {
    this.setData({
      searck_focus: true
    });
  },
  // 失去焦点时
  pushDownPage(e) {
    this.setData({
      searck_focus: false
    });
    var selnum = e.detail.value;
    if (selnum === "" && this.data.searchTitle == '') {
      this.setData({
        searck_change: false
      })
      this.getSearchLogFunc();
    }
  },
  // 点击提交时
  searchFunc(e) {
    var selnum = e.detail.value;
    if (selnum != "") {
      this.setData({
        searck_change: true
      })
      this.getSearchFunc()
    } else {
      this.setData({
        searck_change: false
      })
      this.getSearchLogFunc();
    }
  },
  // 搜索
  async getSearchFunc() {
    let keyword = this.data.searchKeyword
    app.$cloud('search', {
      action: 'search',
      keyword
    }).then(res => {
      console.log(res)
      this.setData({
        Search_Result: res.user_list,
        Search_list: res.other_list
      })
    }).catch(err => {

    })
  },
  // 获取搜索历史
  getSearchLogFunc() {
    let that = this;
    app.globalData.promise.auth.then(res => {
      getSearchLog({
        userId: res.userId,
      }, res.userId).then(res => {
        that.setData({
          Search_history: res,
        });
      });
    });
  },
  // 清除搜索结果
  cleanSearchLogFunc() {
    let that = this;
    app.globalData.promise.auth.then(res => {
      cleanSearch({
        userId: res.userId,
      }, res.userId).then(res => {
        that.getSearchLogFunc();
        wx.showToast({
          title: '搜索结果已清除',
        })
      });
    });
  },
  // 点击历史记录时
  tagSearchFunc(e) {
    let keyword = e.currentTarget.dataset.keyword
    if (e.currentTarget.dataset.keyword != '') {
      this.setData({
        searchTitle: keyword
      })
      this.getSearchFunc()
      this.setData({
        searck_change: true
      })
    }
  },
  // 跳转
  go(e) {
    app.go(e).then(res => {
      console.log(res);
    });
  },
})