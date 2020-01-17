//app.js
import {
    $cloud
} from './util/http'
App({
    ENV: 'master-5vigv',
    $db: null,
    _: null,
    g: {
        openid: 'omo8U0XMUinQIYFT46d8xeK6EYTA',
        isAuth: false
    },
    onLaunch: function () {
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
            this.$db = wx.cloud.database({
                env: this.ENV
            })
            this._ = this.$db.command;
        }

    },
    onShow: function () {
        this.isAuth()
    },
    $cloud(name, data) {
        return $cloud(name, data)
    },
    async login() {
        await this.$cloud('login', {}).then(res => {
            this.g.openid = res.openid
            console.log('app-login', res.openid)
        })
    },
    async isAuth() {
        return await this.$cloud('account', {
            action: 'isAuth'
        }).then(res => {
            this.g.isAuth = res
            return Promise.resolve(res)
        }).catch(err => {
            this.g.isAuth = false
            return Promise.resolve(false)
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
    $message(title) {
        wx.showToast({
            title: title,
            icon: 'none',
        })
    }
})