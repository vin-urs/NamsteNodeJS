// // Require : what is require
// // Module : what is module
// // Export : what is export
// // Path : what is path
// // File : what is file
// // Directory : what is directory
// // __dirname : what is __dirname
// // __filename : what is __filename

// console.log("Welcome to node js");

// console.log(__dirname);
// console.log(__filename);

// // console.log(path);
// // console.log(file);
// // console.log(directory);

// // console.log(require);
// // console.log(module);
// // console.log("export");

// require("./sum");


// var {sum , x , y} = require("./sum");
// console.log(sum(x,));



const {sum , divide} = require("./calculate");

console.log(sum.sumXY(2,3));
console.log(divide.divide(10,2));
