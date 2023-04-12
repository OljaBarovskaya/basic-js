const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(d) {
    if (d==null){return "Unable to determine the time of year!"}
    console.log(d)
    if(d.getMonth){
      let month = d.getMonth();
      console.log(month);
      if ((month>=0)&&(month < 12)){
       if((month>=3)&&(month<6)){return 'spring'} else {
         if((month>=6)&&(month<9)){return 'summer'} else{
           if ((month>=9)&&(month<=11)){return 'autumn'} else
           return 'winter';
         }
        }
      }
    }
   
   else return 'Invalid date!'
   
  }


module.exports = {
  getSeason
};
