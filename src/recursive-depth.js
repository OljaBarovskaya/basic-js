const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  constructor() { 
    this.depth=1;
  } 


  calculateDepth(b) {
    console.log(b)
   
    if(b==null){return 0}
    b.forEach(element => {
      if(Array.isArray(element)){
        console.log(element)
        console.log(this.depth)
this.depth++;
console.log(this.depth)
b=element;
this.calculateDepth(b)}})
return  this.depth;
      }
      
    };
  

module.exports = {
  DepthCalculator
};
