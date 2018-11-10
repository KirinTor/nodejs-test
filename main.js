'use strict';

const factorial = n => (
  n === 0 ? 1 : n * factorial(n - 1)
);

// Comment
console.log(factorial(5));
