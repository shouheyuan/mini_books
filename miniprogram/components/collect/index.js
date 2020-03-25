// components/report/index.js
// import { postAccusationFunc } from "../../utils/service.js";
var app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean,
    albumList: Array,
  },
  observers: {
    albumList: function (newval) {
      if (newval.length) {
        let {
          id: albumId
        } = newval[0]
        this.setData({
          albumId
        })
      }

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    albumId: '',
    assType: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close: function () {
      this.setData({
        show: false
      });
    },
    uploadAssFunc() {
      let {
        albumId
      } = this.data
      this.triggerEvent('setAlbumId', {
        albumId
      });
    },
    changeBtnFunc: function (e) {
      let albumId = e.currentTarget.dataset.id;
      this.setData({
        albumId
      });
    }
  }
});