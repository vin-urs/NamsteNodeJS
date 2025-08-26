
const divideXY = function (x, y) {
  console.log("Dividing1", x, "by", y);
    return x / y;
}

module.exports.divide = divideXY;



module.exports.divide = function (x, y) {
  console.log("Dividing", x, "by", y);
  return x / y;
};