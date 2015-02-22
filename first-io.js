var fs = require('fs');




var buffer = fs.readFileSync(process.argv[2]).toString();
var arr = buffer.split('\n');
console.log(arr.length - 1);	