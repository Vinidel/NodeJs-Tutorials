var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

//urls : http://www.devmedia.com.br/css/2013/devmedia.css?d=1
//	   : http://g1.globo.com/shopping/g1.xml	
//     : http://g1.globo.com/dynamo/scripts/js/glb.recaptcha.js

/*C:\Users\Vinicius\Documents\tutorials\nodeJs\http\Async>learnyounode verify almost-async.js htt
p://www.devmedia.com.br/css/2013/devmedia.css?d=1 http://g1.globo.com/dynamo/scr
ipts/js/glb.recaptcha.js http://g1.globo.com/shopping/g1.xml*/

function printResults(){
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	};
}

function httpGet (index){
	http.get(process.argv[2 + index], function (response){
		response.pipe(bl(function (err, data){
			if(err){
				return console.error(err);
			}
			results[index] = data.toString();
			count++;

			if (count == 3){
				printResults();
			}
		}));
	});
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
};