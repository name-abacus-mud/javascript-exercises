const fibonacci = function(input) {
    let count = +input;

    if (count < 0) return 'OOPS';
    if (count == 0 ) return 0;

    let firstNum = 1;
    let secondNum = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstNum + secondNum;
        secondNum = firstNum;
        firstNum = current;
    }

    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
