const reverseString = function(str) {

    let result = '';
    let i = str.length - 1;

    while (i >= 0) {
        result += str[i];
        i--;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
