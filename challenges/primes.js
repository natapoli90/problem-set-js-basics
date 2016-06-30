/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
function isPrime(value) {
     for(var i = 2; i < value; i++) {
         if(value % i === 0) {
             return false;
         }
     }
     return value > 1;
 }
 function primes(max) {
     var arr = [];
     var arrPrimes = [];
     for (var i = 2; i <= max; ++i) {
         if (!arr[i]) {

             arrPrimes.push(i);
             for (var j = i << 1; j <= max; j += i) {
                 arr[j] = true;
             }
         }
     }
     return arrPrimes;
 }
