const palindromes = function (string) {
    const listOFAllowedChar = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = string
    .toLowerCase()
    .split('')
    .filter(character => listOFAllowedChar.includes(character))
    .join('');

    const reverseString = cleanedString.split('').reverse().join('');

    return cleanedString == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
