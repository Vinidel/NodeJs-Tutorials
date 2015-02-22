var http = require('http');
var bl = require('bl');


module.exports = function (url, callback){
	
	http.get(url, function (res){
		res.pipe(bl(function (err, data) {
   		if (err){
   			return callback(err);
   		}

   		return callback(data);
      
    
  }))  
})
};