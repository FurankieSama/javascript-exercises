const repeatString = function (text, num) {
  if (num < 0) return "ERROR";

  let finalString = "";

  for (let index = 0; index < num; index++) {
    finalString += text;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
