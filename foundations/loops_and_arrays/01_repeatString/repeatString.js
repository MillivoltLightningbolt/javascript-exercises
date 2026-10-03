/// IF num < 0
///   RETURN 'ERROR'
/// ENDIF
/// INIT result
/// FOR i in range given count
///   APPEND given string to result
/// ENDFOR
/// RETURN result

const repeatString = function(string, num) {
  if (num < 0) { return "ERROR" };

  let result = "";

  for (let i = 0; i < num; i++) {
    // console.log(`DEBUG: ${i}\t${result}\t${string}`);
    result = result + string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
