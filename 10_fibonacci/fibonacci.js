const fibonacci = function(index) {
    index = parseInt(index);
    if (index < 0) return 'OOPS';
    if (index <= 1) {
        return index;
      }
      return fibonacci(index - 1) + fibonacci(index - 2);
};

// Do not edit below this line
module.exports = fibonacci;
