const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let arr=n.toString().split('');
  console.log(arr)
  if(arr[0]<arr[1]){arr.splice(0,1)} else {
    let duplicate = arr.slice().sort();
  console.log(duplicate)
  let indexOfNumber = arr.indexOf(duplicate[0], 0);
  arr.splice(indexOfNumber, 1);
  } 
  let number = Number(arr.join(''));
  return number
}


module.exports = {
  deleteDigit
};
