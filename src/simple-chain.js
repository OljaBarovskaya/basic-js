const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
currentLink:'',
  getLength() {
  return this.length
  },
  addLink(value) {
    if(value===null){value='null'};
    if(value===0){value='0'};
    if(value===undefined){value=' '};
    value=value.toString();
    if(this.length===0){
      this.currentLink=`( ${value} )`;
      this.length=1;
    } else {
      this.currentLink=this.currentLink+`~~`+`( ${value} )`;
      this.length++;
    }
    return this;
  },
  removeLink(position) {
    if(!(typeof position === 'number' && Number.isInteger(position))){
      this.length= 0;
      this.currentLink='';
      throw new Error("You can't remove incorrect link!")
    }
let a=this.currentLink.split('~~');
if((position-1)>=a.length || (position-1)<0){
  this.length= 0;
  this.currentLink='';
  throw new Error("You can't remove incorrect link!")
}
a.splice((position-1),1);
this.currentLink=a.join('~~');
this.length--;
return this;
  },
  reverseChain() {
    let a=this.currentLink.split('~~');
    a.reverse();
    this.currentLink=a.join('~~');
    return this;
  },
  finishChain() {
    let string = this.currentLink;
    this.length= 0;
    this.currentLink='';
   return string
  
  }
};


module.exports = {
  chainMaker
};
