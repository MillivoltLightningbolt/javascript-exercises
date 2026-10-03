function removeSingleItemFromArray(array, target) {
  while (array.includes(target)) {
    let idx = array.indexOf(target);
    array.splice(idx, 1);
  }
  return array;
}

const removeFromArray1 = function(array, ...items) {
  for (item of items) {
    removeSingleItemFromArray(array, item);
  }
  return array;
};

// similar to previous solution, but uses `arguments` instead of `...rest` parameters
// NOTE: more modern JS should use the ...rest parameters
const removeFromArray2 = function(array) {
  for (let i = 1; i < arguments.length; i++) {
    removeSingleItemFromArray(array, arguments[i]);
  }
  return array;
};

// similar to previous solutions, but constructs a new array instead of mutating existing one
const removeFromArray3 = function(array, ...items) {
  let result = [];
  array.forEach((item) => {
    if (!items.includes(item)) { result.push(item) }
  })
  return result;
};

// also creates a new array but using simpler `filter` function
const removeFromArray4 = function(array, ...items) {
  return array.filter((item) => !items.includes(item));
}

const removeFromArray = removeFromArray4;

// Do not edit below this line
module.exports = removeFromArray;
