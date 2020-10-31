const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {

 let stringRepeater;
  if (str === null) {
    stringRepeater = 'null';
  } else {
    stringRepeater = str.toString();
  };

  let repeatTimes = Object.values(options)[0];
  let separator = Object.values(options)[1];
  let addition = Object.values(options)[2];
  let additionRepeatTimes = Object.values(options)[3];  
  let additionSeparator = Object.values(options)[4];
  if (Object.values(options)[0] === undefined || Number.isInteger(Object.values(options)[0]) === false) {
    repeatTimes = 1;
  } 
  if (Object.values(options)[1] === undefined ) {
    separator = '+';
  } 
  if (Object.values(options)[2] === undefined) {
    addition = '';
  } 
  if (Object.values(options)[4] === undefined || Object.values(options)[3] === undefined) {
    additionSeparator = '+';
  }
  if (Object.values(options)[3] === undefined || Number.isInteger(Object.values(options)[0]) === false) {
    additionRepeatTimes = 1;
  } 
  
  let finalResult = (stringRepeater + (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length) + separator).repeat(repeatTimes).slice(0, -separator.length);
  
  return finalResult;
};
  