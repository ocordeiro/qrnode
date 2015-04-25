var qrcode  = require('./lib/qrcode'),
    Jimp    = require("jimp"),
    request = require('request');

var image;

module.exports.detect = function(im, callback){
  if(isUrl(im)){
      // Download image from url and process
      request({url:im, encoding:null}, function(err,res,body){
        image = new Jimp(body, res.headers['content-type'], function () {  
          qrcode.process(image.bitmap, callback);  
        });
      });
  }else{
      // Process image from local file
      image = new Jimp(im, function () {  
         qrcode.process(image.bitmap, callback);
      });
   }
}

function isUrl(s){
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(s);
}