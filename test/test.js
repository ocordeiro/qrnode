var qrnode = require('../index');

qrnode.detect("https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=Teste", function(result){
  console.log("Decode from url:", result);
});

qrnode.detect("qrcode.png", function(result){
  console.log("Decode from local file:", result);
});