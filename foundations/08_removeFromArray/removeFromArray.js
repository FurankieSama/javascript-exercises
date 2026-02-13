const removeFromArray = function(originalArray, ...number) {
    const multipleElements = new Set(number);

    return originalArray.filter(item => !multipleElements.has(item))
};

// Do not edit below this line
module.exports = removeFromArray;
