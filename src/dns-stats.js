const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  throw new NotImplementedError('Not implemented');
  // function getDNSStats(domains){
  //   let arr=[];
  // for(let i=0; i<domains.length; i++){
  //  let a = domains[i].split('.');
  //  console.log(a);
  //  arr.push(a);
  // }
  // console.log(arr);
  // arr.forEach(element => {element.reverse()})
  // let b=[];
  // for(let i=0; i<arr.length; i++){
  //   for(let j=0; j<arr[i].length; j++){
  //     let c;
  // if(!b.includes(arr[i][j])){while (j>0){
  // c=arr[i][j]
  // }
    
  // }
  //   }
   
  // console.log(c);
  // }
  // }
  
  // a             a+            a1              a        a1            a2
  // arr[i][0]; arr[i][0]+`.${arr[i][1]}`; arr[i][0]+`.${arr[i][1]}+`.${arr[i][2]}``
  
  // //getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']) => {'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}
  // console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))
}

module.exports = {
  getDNSStats
};
