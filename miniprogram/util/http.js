export const $cloud = function (name, data) {
    return new Promise((resolve, reject) => {
        wx.cloud.callFunction({
            name,
            data,
        }).then(res => {
            try {
                resolve(res.result)
            } catch {
                reject(new Error(res))
            }
        }).catch(err => {
            reject(err)
        })
    })
}