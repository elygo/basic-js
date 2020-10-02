const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  if (typeof(sampleActivity) !== "string" || sampleActivity === undefined || sampleActivity === null || sampleActivity === false){
    return false
  } else if(Number(sampleActivity) !== "number"){
    return false;
  } else {
    k = 0.693/HALF_LIFE_PERIOD;
    t = Math.log2(MODERN_ACTIVITY/Number(sampleActivity)) / k;
  }

  return Math.ceil(t);
};
