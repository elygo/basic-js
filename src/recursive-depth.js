const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(Array.isArray(arr)){
      if (arr.length === 0) { return 1 };
      return 1 + Math.max(...arr.map(d => this.calculateDepth(d)));      
    } else {
      return 0;
    }
  }
};