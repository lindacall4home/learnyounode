var fs = require('fs');

var filteredList;
fs.readdir(process.argv[2], function(err, list){
  if(!err){
    filteredList = list.filter(function(element){
      return element.endsWith('.' + process.argv[3]);
    })
  }
  console.log(filteredList.join('\n'));

});

// fs.readFile(process.argv[2], 'utf8', function(err, data){
//   if(!err){
//     console.log(data.split('\n').length - 1);
//   }
// })


// var arr = fs.readFileSync(process.argv[2]).toString().split('\n');
// console.log(arr.length - 1);

// let sum = 0;
// for (let i = 2; i < process.argv.length; i++){
//   sum += +process.argv[i];
// }
// console.log(sum);
// console.log("HELLO WORLD");
