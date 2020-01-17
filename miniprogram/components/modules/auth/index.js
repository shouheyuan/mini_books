// components/auth/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    value: function (value) {
      this.setData({
        hookValue: value
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    hookValue: null
  },
  lifetimes: {
    attached() {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 隐藏
    hide() {
      this.setData({
        hookValue: false
      })
    },
    // 授权
    getUserInfo(e) {
      if(e.detail.errMsg === 'getUserInfo:ok') {
        let userinfo = e.detail.userInfo
        app.$cloud('account', {
          action: 'update',
          userinfo,
        }).then(res => {
          this.triggerEvent('on-ok')
        }).catch(err=>{

        })
      }
    }
  }
})