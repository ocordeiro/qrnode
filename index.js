const qrcode = require('./lib/qrcode')
const Jimp = require('jimp')

module.exports.detect = (source, cb) => {
  return new Promise((resolve, reject) => {
    Jimp.read(source).then(image => {
      qrcode.process(image.bitmap, decode => {
        cb(decode)
        resolve(decode)
      })
    }).catch(reject)
  })
}
