var fs = require('fs');
var file = process.argv[2];



fs.readFile( file, function (err, data) {

  var str = data.toString().split('\n').length - 1;
  // var array = str.split('\n');
  console.log(str);
});


