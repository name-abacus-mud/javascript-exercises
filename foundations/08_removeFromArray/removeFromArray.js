const removeFromArray = function(array, ...element) {
    return array.filter(val => !element.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
