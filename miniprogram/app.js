//app.js
import {$cloud} from './util/http'
App({
    ENV: 'master-y1an3',
    $db: null,
    _: null,
    g: {
        openid: 'omo8U0XMUinQIYFT46d8xeK6EYTA',
        windowWidth: 0,
        windowHeight: 0,
        statusBarHeight: 0,
    },
    onLaunch: function () {
        let _this = this
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            wx.cloud.init({
                // env 参数说明：
                //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
                //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
                //   如不填则使用默认环境（第一个创建的环境）
                env: this.ENV,
                traceUser: true, // 是否在将用户访问记录到用户管理中，在控制台中可见
            })
            // 数据库脚本
            this.$db = wx.cloud.database({
                env: this.ENV
            })
            // 数据库聚合操作符
            this._ = this.$db.command;
        }
        wx.getSystemInfo({
            success: function (res) {
                _this.g.windowHeight = res.windowHeight
                _this.g.windowWidth = res.windowWidth
                _this.g.statusBarHeight = res.statusBarHeight
            }
        })
    },
    onShow: function () {
        this.login()
    },
    $cloud(name, data) {
        return $cloud(name, data)
    },
    async login() {
        await this.$cloud('login', {}).then(res => {
            this.g.openid = res.openid
        })
    },
    // 全局方法
    go(e) {
        return new Promise((resolve, reject) => {
            wx.navigateTo({
                url: e.currentTarget.dataset.url,
                success: res => resolve(res),
                fail: res => reject(res)
            })
        })
    },
    //提示
    $message(title){
        wx.showToast({
            title: title,
            icon: 'none',
        })
    }
})