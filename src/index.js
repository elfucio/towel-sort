module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined) {
    return [];
  } else {
    arr = matrix.map(function (element, index) {
      if (index % 2 != 0) {
        return element.reverse();
      }
      return element;
    });
  }
  return arr.flat();
};