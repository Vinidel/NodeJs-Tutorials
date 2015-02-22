var myModule = require('./filtered-module');


myModule(process.argv[2], process.argv[3], function (err, data){
	if(err){
		return console.log('Erro: ' + err);
	}

	for(i in data){
		console.log(data[i]);
	}
});