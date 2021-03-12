const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix || matrix[0][0] === undefined) return 0;
  let cats_count=0;
  for(let i=0;i<matrix.length;i++)
  {
    for(let j=0;j<matrix[i].length;j++)
    {
      if (matrix[i][j] == '^^') cats_count++;
    }
  }
  return cats_count;
};
