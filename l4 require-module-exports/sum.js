
console.log("This is sum file");
// modules protected scope variable and functions by default not accessible outside the file to make it accessible we use export and require
var x = 10;
var y = 20;
var calculate = function (a, b) {
  return a + b;
}

module.exports = {
  sum: calculate,
  x: x,
  y: y
};