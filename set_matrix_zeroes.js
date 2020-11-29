var setZeroes = function(matrix) {
    let rowFlag, colFlag;
      
    for (let i = 0; i < matrix.length; i++) {
      if(matrix[i][0] === 0) {
          colFlag = true;
      }
    }
      
      for (let j = 0; j < matrix[0].length; j++) {
          if(matrix[0][j] === 0) {
              rowFlag = true;
          }
      }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          continue;
        } else {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
    for (let i = 1; i < matrix.length; i++) {
      if(matrix[i][0] === 0) {
          for (let j = 1; j < matrix[i].length; j++) {
              matrix[i][j] = 0;
          }
      }
    }
      
      for (let j = 1; j < matrix[0].length; j++) {
          if(matrix[0][j] === 0) {
              for (let i = 1; i < matrix.length; i++) {
                  matrix[i][j] = 0;
              }
          }
      }
      
      if(rowFlag) {
          for (let j = 0; j < matrix[0].length; j++) {
              matrix[0][j] = 0;
          }
      }
      
      if(colFlag) {
          for (let j = 0; j < matrix.length; j++) {
              matrix[j][0] = 0;
          }
      }
  
  };