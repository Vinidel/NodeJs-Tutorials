var url = process.argv[2];
var httpModule = require('./http-get-module');
//http://www.devmedia.com.br/css/2013/devmedia.css?d=1

httpModule(url, function (err, data){

	if(!err){
		console.log(data);
	}else {
		console.log('Ops erro ' + err);	
	}
	
});