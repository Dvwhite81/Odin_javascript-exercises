const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let backwards = str.split('').reverse().join('');
    console.log('str', str);
    console.log('backwards', backwards);

    return str === backwards;
};

// Do not edit below this line
module.exports = palindromes;
