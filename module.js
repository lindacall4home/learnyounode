var fs = require('fs');

module.exports = function(dir, ext, callback){

  var filteredList;
  fs.readdir(dir, function(err, list){
    if(err){
      return callback(err);
    }
    else{
      filteredList = list.filter(function(element){
        return element.endsWith('.' + ext);
      })
    }
    return callback(null, filteredList);
  });
};
