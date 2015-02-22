var fs = require('fs');
var path = require('path');



module.exports = function (filePath, extension, callback){

	var fileList = [];

	fs.readdir(filePath, function (err, data){
		if(err){
			return callback(err);
		}
		for(i in data){
			if (path.extname(data[i]) == '.' + extension){
				fileList.push(data[i]);	
			}	
		}
		return callback(null, fileList)
	});
};