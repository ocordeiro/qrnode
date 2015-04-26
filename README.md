# qrnode #

QR Code decoder from local file or URL without canvas

A fork of [jsqrcode](https://github.com/LazarSoft/jsqrcode) which is a port of [ZXing](http://code.google.com/p/zxing)

Example usage:

    var qrnode = require('qrnode');
    
    // From URL
    qrnode.detect("https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=Teste", function(result){
      console.log(result);
    });

    // From local File
    qrnode.detect("qrcode.png", function(result){
      console.log(result);
    });

 # License #

qrnode is licensed under the Apache license.