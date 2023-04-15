const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
   ];
   
  //  minesweeper(matrix) => [
  //   [1, 2, 1],
  //   [2, 1, 1],
  //   [1, 1, 1]
  //  ];
  
  
  
  
   function minesweeper(matrix) {
     let matrix2=[];
     console.log(matrix2)
      for(let i=0; i<matrix.length; i++){
        matrix2[i]=[];
        for(let j=0; j<matrix[i].length; j++){
          matrix2[i][j]=0;
        }
      }
     console.log(matrix2)
    for (let i=0; i<matrix.length; i++){
     for(let j=0; j<matrix[i].length; j++){
     console.log(matrix2)
        if(matrix[i][j]===true){
   //       console.log(`i=${i}, j=${j}`,matrix[i][j])
          if (i>0 && j>0 && i<(matrix.length-1) && j<(matrix[i].length-1)){
          if(matrix[i-1][j-1]){matrix2[i-1][j-1]++};
          if(matrix[i-1][j]){matrix2[i-1][j]++};
          if(matrix[i-1][j+1]){matrix2[i-1][j+1]++};
          if(matrix[i][j-1]){matrix2[i][j-1]++};
          if(matrix[i][j+1]){matrix2[i][j+1]++};
          if(matrix[i+1][j-1]){matrix2[i+1][j-1]++};
          if(matrix[i+1][j]){matrix2[i+1][j]++};
          if(matrix[i+1][j+1]){matrix2[i+1][j+1]++};
          }
          if (j>0 && i<(matrix.length-1) && j<(matrix[i].length-1)){
          if(matrix[i][j-1]){matrix2[i][j-1]++};
          if(matrix[i][j+1]){matrix2[i][j+1]++};
          if(matrix[i+1][j-1]){matrix2[i+1][j-1]++};
          if(matrix[i+1][j]){matrix2[i+1][j]++};
          if(matrix[i+1][j+1]){matrix2[i+1][j+1]++};
          }
          if (i<(matrix.length-1) && j<(matrix[i].length-1)){
            if(matrix[i][j+1]){matrix2[i][j+1]++};
            if(matrix[i+1][j]){matrix2[i+1][j]++};
           if(matrix[i+1][j+1]){matrix2[i+1][j+1]++};
          }
          if (j>0 && j<(matrix[i].length-1)){
            if(matrix[i][j-1]){matrix2[i][j-1]++};
          if(matrix[i][j+1]){matrix2[i][j+1]++};
          }
          if (j>0 && i<(matrix.length-1)){
            if(matrix[i][j-1]){matrix2[i][j-1]++};
            if(matrix[i+1][j-1]){matrix2[i+1][j-1]++};
            if(matrix[i+1][j]){matrix2[i+1][j]++};
          }
          if (j<(matrix[i].length-1)){
            if(matrix[i][j+1]){matrix2[i][j+1]++};
          }
          if (j>0){
            if(matrix[i][j-1]){matrix2[i][j-1]++};
          }
          if (i<(matrix.length-1)){
            if(matrix[i+1][j]){matrix2[i+1][j]++};
          }
          if (i>0 && i<(matrix.length-1) && j<(matrix[i].length-1)){
            if(matrix[i-1][j]){matrix2[i-1][j]++};
            if(matrix[i-1][j+1]){matrix2[i-1][j+1]++};
            if(matrix[i][j+1]){matrix2[i][j+1]++};
            if(matrix[i+1][j]){matrix2[i+1][j]++};
          if(matrix[i+1][j+1]){matrix2[i+1][j+1]++};
          }
          if (i>0 && j<(matrix[i].length-1)){
            if(matrix[i+1][j]){matrix2[i+1][j]++};
          if(matrix[i+1][j+1]){matrix2[i+1][j+1]++};
          }
          if (i>0 && i<(matrix.length-1)){
            if(matrix[i-1][j]){matrix2[i-1][j]++};
            if(matrix[i+1][j]){matrix2[i+1][j]++};
          }
          if (i>0){
            if(matrix[i-1][j]){matrix2[i-1][j]++};
          }
          if (i>0 && j>0 &&  j<(matrix[i].length-1)){
            if(matrix[i-1][j-1]){matrix2[i-1][j-1]++};
          if(matrix[i-1][j]){matrix2[i-1][j]++};
          if(matrix[i-1][j+1]){matrix2[i-1][j+1]++};
         if(matrix[i][j-1]){matrix2[i][j-1]++};
          if(matrix[i][j+1]){matrix2[i][j+1]++};
          }
          if (i>0 && j>0){
            if(matrix[i-1][j-1]){matrix2[i-1][j-1]++};
            if(matrix[i-1][j]){matrix2[i-1][j]++};
            if(matrix[i][j-1]){matrix2[i][j-1]++};
          }        
          if (i>0 && j>0 && i<(matrix.length-1)){
            if(matrix[i-1][j-1]){matrix2[i-1][j-1]++};
            if(matrix[i-1][j]){matrix2[i-1][j]++};
            if(matrix[i][j-1]){matrix2[i][j-1]++};
            if(matrix[i+1][j-1]){matrix2[i+1][j-1]++};
            if(matrix[i+1][j]){matrix2[i+1][j]++};
          }
        }
      }
    }
    return matrix2
  }
  
  
  
  console.log(minesweeper(matrix))
  
  // [i-1][j-1] [i-1][j] [i-1][j+1]
  // [i][j-1]    [i][j]   [i][j+1]
  // [i+1][j-1] [i+1][j] [i+1][j+1]
  
  
  
  // if (i<(matrix.length-1) && j<(matrix[i].length-1)){
  //   if(matrix[i][j+1]){matrix2[i][j+1]++};
  //   if(matrix[i+1][j]){matrix2[i+1][j]++};
  //           if(matrix[i+1][j+1]){matrix2[i+1][j+1]++};
  
  // function minesweeper(matrix) {
  //     let matrix2=[];
  //     for (let i=0; i<matrix.length; i++){
  //        matrix2[i]=[];
  //       for(let j=0; j<matrix[i].length; j++){
  //   matrix2[i][j]=0;
  //   console.log(matrix2)
  //       }
  //     }
  //   }
  
  //   console.log(minesweeper(matrix))
}

module.exports = {
  minesweeper
};
