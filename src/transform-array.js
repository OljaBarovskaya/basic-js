const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr){
  if(!Array.isArray(arr)){throw new Error("'arr' parameter must be an instance of the Array!")}else {
    let commands = ['--discard-next','--discard-prev', '--double-next', '--double-prev'];
  let copiedArr=arr.slice();
  arr.forEach((element,index)=>{
    if(!commands.includes(element)){} else {
  copiedArr.splice(-(arr.length - index), 1);
  if(element==='--discard-next'){
if(!(arr[index+1]===undefined)){copiedArr.splice(-(arr.length-(index+1)), 1)}
  }
  if(element==='--discard-prev'){
   if(!(arr[index-1]===undefined)) {
    if(!((arr[index-2]==='--discard-next'))){
      copiedArr.splice(-(arr.length-(index)), 1);
    }
   }
  }
  if(element==='--double-next'){
    if (!(arr[index+1]===undefined)){copiedArr.splice(-(arr.length-(index+1)), 0, arr[index+1])}    
  }
  if(element==='--double-prev'){
if (!(arr[index-1]===undefined)) {
  if (!((arr[index-2]==='--discard-next'))){
    copiedArr.splice(-(arr.length-(index)), 0, arr[index-1])
  }
}  
  }
    }
  })
  return copiedArr
  } 
  
  }

module.exports = {
  transform
};
