var http = require('http');

module.exports = function (url , callback){

	http.get(url, function (res){
		res.setEncoding('utf8');
		res.on('data', function (data){
			return callback(data);
		});	
		res.on('error', function (err){
			return callback(err);
		});

	});
};