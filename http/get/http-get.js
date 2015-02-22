var http = require('http');
var url = process.argv[2];
//http://www.devmedia.com.br/css/2013/devmedia.css?d=1

http.get(url, function (res){
		//console.log('Got a response: ' + res.statusCode);
		res.setEncoding('utf8');
		res.on('data' , function (data){
			console.log(data);
		});

		res.on('error', function (err){
			console.log('Ops a error ocurred: ' + err);
		});	
});