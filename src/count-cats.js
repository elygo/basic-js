module.exports = function countCats(backyard) {
  // remove line with error and write your code here
    if (backyard === undefined || backyard.length === 0){
      return 0;
    }
    var total = 0;
    for(var i=0; i < backyard.length; i++){
      var innerArrayLength = backyard[i].length;
      for(var j=0; j < innerArrayLength; j++){
          if(backyard[i][j] === '^^'){
              total = total + 1;
          } else {}
      }
    }
    return total;
};
