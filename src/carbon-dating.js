const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(string){
  if (!(typeof string === 'string')||(isNaN(Number(string)))||!(string.length)){return false}
  let activityN = Number(string);
  if((activityN<=0 || activityN>15)){return false}
let t = Math.ceil(Math.log(15/activityN)*5730/0.693);
return t
}

module.exports = {
  dateSample
};
