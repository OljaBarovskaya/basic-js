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
    if(Date. parse(d)){
      let month = d.getMonth();
      console.log(month);
      if ((month>=0)&&(month < 12)){
       if((month>=2)&&(month<5)){return 'spring'} else {
         if((month>=5)&&(month<8)){return 'summer'} else{
           if ((month>=8)&&(month<11)){return 'autumn'} else
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
