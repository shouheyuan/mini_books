// miniprogram/pages/home/index.js
import {tabs} from '../../data/index.js'
import * as watch from '../../util/watch.js'
const app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        tabs,
        currentIndex: 0,
        kind: 1,
        lineStyle: {},
        scrollLeft: 0,
        duration: 0.3,
        isTabLine: false,
        page: 0,
        pageSize: 10,
        books: [],
        isAt: false,
        statusBarHeight: app.g.statusBarHeight,
        windowHeight: app.g.windowHeight,
        op: false

    },
    watch: {
        kind: function (newVal) {

        },
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        watch.setWatcher(this)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setLine()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log(this.data.page)
        setTimeout(() => {
            this.setData({
                isTabLine: true
            })
        }, 500)
        let {
            page,
            books
        } = this.data
        if (page === 0 && books.length === 0) {
            this.getList()
        }
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
        this.data.page++
        this.setData({
            page: this.data.page
        })
        this.getList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    select(e) {
        let {
            index,
            kind
        } = e.currentTarget.dataset
        this.setData({
            currentIndex: index,
            kind: kind,
            page: 0,
            books: []
        })
        this.setLine()
        this.scrollIntoView()
        this.getList()
    },
    // 获取列表
    getList() {
        app.$cloud('home', {
            action: 'getList',
            kind: this.data.kind,
            page: this.data.page,
            pageSize: this.data.pageSize
        }).then(res => {
            let books = this.data.books.concat(res.data)
            this.setData({
                books: books,
                isAt: true
            })
        })
    },
    setLine() {
        let lineWidth = 0,
            lineLeft = 0
        this.getElementData('.tab__item', (data) => {
            let el = data[this.data.currentIndex]
            lineWidth = el.width / 2
            lineLeft = el.width / 2 + (-data[0].left) + el.left
            this.data.lineStyle = {
                width: `${lineWidth}rpx`,
                transform: `translateX(${lineLeft}px) translateX(-50%)`,
                transitionDuration: `${this.data.duration}s`
            };
            this.setData({
                lineStyle: this.data.lineStyle
            })
        })
    },
    scrollIntoView() { // item滚动
        let count = 0;
        let frames = 30;
        let lineLeft = 0;
        let self = this

        this.getElementData('#tab_list', (data) => {
            let list = data[0]
            this.getElementData('.tab__item', (data) => {
                let el = data[this.data.currentIndex]
                // lineLeft = el.width * (this.currentIndex + 0.5) - list.width / 2 - this.scrollLeft
                lineLeft = el.width / 2 + (-data[0].left) + el.left - list.width / 2 - this.data.scrollLeft
                animate();
            })
        })

        function animate() {
            self.data.scrollLeft += lineLeft / frames;
            self.setData({
                scrollLeft: self.data.scrollLeft
            })
            if (++count < frames) {
                setTimeout(animate, self.data.duration / frames);
            }
        }
    },
    getElementData(el, callback) {
        wx.createSelectorQuery().in(this).selectAll(el).boundingClientRect().exec((data) => {
            callback(data[0]);
        });
    },
    // 
    open_set(e) {
        let op = this.data.op
        this.setData({
            op: !op
        });
    },
})