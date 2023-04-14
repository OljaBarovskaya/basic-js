const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
let sum;
function getSumOfDigits(n) {
  console.log(n)
  let a=n.toString();
  if(a.length===1){return sum} else {
    let sum=0;
    if(a.length>1){
      for(let i=0; i<a.length; i++){
       sum=sum+Number(a[i]);
    }
    getSumOfDigits(sum); 
}
}
}

module.exports = {
  getSumOfDigits
};
