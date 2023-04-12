const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

  function getCommonCharacterCount(str1, str2){
    let matchCount=0;
   let arrStr1= str1.split('');
   let arrStr2= str2.split('');
   arrStr1.sort();
   arrStr2.sort();
   console.log(arrStr1,arrStr2);
   let j=0;
  for(let i=0; i<str1.length; i++){
    console.log(`str1-${i+1}=${arrStr1[i]}`)
    console.log(`str2-${j+1}=${arrStr2[j]}`)
    
    if(arrStr1[i]===arrStr2[j]){
     matchCount++
      j++;
      console.log(matchCount)
  } else{
        let a=j+1;
        for(a; a<str2.length;a++){
          console.log(`str1-${i+1}=${arrStr1[i]}`)
    console.log(`str2-${a+1}=${arrStr2[a]}`)    
          if(arrStr1[i]===arrStr2[a]){
            matchCount++;
            console.log(matchCount);
            j=a+1;
            break
        }
      }
    }
  }
  return matchCount;
  }

module.exports = {
  getCommonCharacterCount
};
