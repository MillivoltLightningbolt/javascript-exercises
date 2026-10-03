//// OPTION 1:
// INIT result
// FOR i = string.length - 1; i >= 0; i--
//  APPEND string[i] to result
// ENDFOR
// RETURN result

const reverseString1 = function(string) {
  let result = "";
  for (i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};

//// OPTION 2:
// SPLIT string into array of individual characters
// SORT in reverse
// JOIN with ""
// RETURN joined result

const reverseString2 = function(string) {
  return string.split("").reverse().join("");
};

const reverseString = reverseString2;

// Do not edit below this line
module.exports = reverseString;
