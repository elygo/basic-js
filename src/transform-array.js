const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr);
  if ( arr === undefined || arr === null ){
    throw new CustomError('Error');
  } else if(!Array.isArray(arr) || !arr) {
    throw 'Error';
  } else if(!Array.isArray(arr) && arr.length === 0){
    
}  else {
    let newArray = [];
    for(var i=0; i < arr.length; i++){
      if(arr[i] === '--discard-prev'){
        if (i === 0) {

        } else if (i > 1 && arr[i-2] === '--discard-next') {

        } else {
          newArray.pop();
        }
      } else if(arr[i] === '--double-prev'){
        if (i === 0) {

        } else if (i > 1 && arr[i-2] === '--discard-next') {

        } else {
          newArray.push(arr[i-1]);
        }
      } else if(i > 0 && arr[i-1] === '--discard-next'){
        
      } else if (arr[i] === '--discard-next') {

      } else if (arr[i] === '--double-next') {
        if (arr[arr.length-1] === arr[i]) {

        } else {
          newArray.push(arr[i+1]);
        }
      } else {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
  
};
