const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {

  if(str===null){
    str='null'
  }
  if(str===false){
    str='false'
  }
  if(str===true){
    str='true'
  }
  
  if(!(typeof(str)==='string')){
    if(Array.isArray(str)){
      str.join('')
    } else {
      str.toString()
    }
  }

let repeatTimes=options.repeatTimes;
let separator='+';
if(options.separator){
  separator=options.separator;
}
let addition=options.addition;

if(addition===null){
  addition='null'
}
if(addition===false){
  addition='false'
}
if(addition===true){
  addition='true'
}

let additionRepeatTimes=options.additionRepeatTimes;
let additionSeparator='|';
if(options.additionSeparator){
  additionSeparator=options.additionSeparator;
}


if(addition){
if(!(typeof(addition)==='string')){
  if(Array.isArray(addition)){
    addition.join('')
  } else {
    addition.toString()
  }
}
}


 let additionString;
 if((addition)||(addition===false)){
  additionString=addition;
  for (let i=1; i<additionRepeatTimes;i++){
    additionString=additionString+additionSeparator+addition;
    }
 }

let mainString;
if((addition)||(addition===false)){
  mainString=str+additionString;
  for (let i=1; i<repeatTimes;i++){
    {
      mainString=mainString+separator+str+additionString;
    }
}
}
 else {
    mainString = str;
    for (let i=1; i<repeatTimes;i++){
      {
        mainString=mainString+separator+str;
      }
    }
  }

  

console.log(mainString);
return mainString;
}

module.exports = {
  repeater
};
