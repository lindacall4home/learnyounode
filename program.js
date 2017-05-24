var httpCore = require('http');

httpCore.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    console.log(data);
  });
  response.on('error', function(error){
    console.error(error);
  });
}).on('error', console.error);

// var myModule = require('./module.js');
//
// myModule(process.argv[2], process.argv[3], function(err, fileList){
//   if(err){
//     console.error('An error occurred: ' + err);
//     process.exit(1);
//   }
//   else{
//     console.log(fileList.join('\n'));
//   }
// });

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
