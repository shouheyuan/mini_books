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
      let userinfo = e.detail.userInfo
      app.$cloud('user', {
        action: 'update',
        userinfo,
      }).then(res => {
        console.log(res)
      })


      return false
      // let p = null
      // let {
      //   openid
      // } = app.g
      // let userinfo = e.detail.userInfo
      // let data = userinfo
      // data['openid'] = openid
      // let user = await app.$db.collection('user')
      // .where({
      //   openid
      // })
      // .get()
      // let isGet = !!user.data.length
      // // 查到了
      // if (isGet) {
      //   p = app.$db.collection('user')
      //   .where({
      //     openid
      //   }).update({
      //     data
      //   })
      // } else {
      //   p = app.$db.collection('user').add({
      //     data
      //   })
      // }
      // p.then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      // return false
    }
  }
})