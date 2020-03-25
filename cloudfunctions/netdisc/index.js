// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  throwOnNotFound: false
})
const _ = db.command
const $ = db.command.aggregate
let openid = ''


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  openid = wxContext.OPENID
  switch (event.action) {
    case 'index': {
      return search(event, context)
    }
    case 'package' : {
      return package(event, context)
    }
    default: {
      return
    }
  }
}
/*
  获取单个图片下载链接
  @param {String} KeyWord - bookID
*/
async function search(event) {
  let search = await db.collection('netdisc').where({
    name: {
      $regex: event.keyword,
      $options: 's'
    }
  }).limit(20).get()
  return search
}

/*
  获取打包的下载链接
  @param {String}
*/
async function package() {
  let data = await db.collection('book_package').get()
  return data
}