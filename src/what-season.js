const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let yearTime;
  let dateFull = date;
  if (dateFull === null || dateFull === undefined) {
    return 'Unable to determine the time of year!'; 
  }  else if (typeof dateFull.getMonth !== 'function' || Object.prototype.toString.call(dateFull) !== '[object Date]') {
    throw new Error('Invalid argument'); 
  } else {
    let dateTimenum = dateFull.getMonth();
    switch(true) {
      case (dateTimenum === 11):
          yearTime = 'winter';
          break;
      case (0 <= dateTimenum && dateTimenum <= 1):
          yearTime = 'winter';
          break;
      case (2 <= dateTimenum && dateTimenum <= 4):
          yearTime = 'spring';
          break;
      case (5 <= dateTimenum && dateTimenum <= 7):
          yearTime = 'summer';
          break;
      case (8 <= dateTimenum && dateTimenum <= 10):
          yearTime = 'autumn';
          break;
      default:
          break;
    }
    
    return yearTime;

  }
};
