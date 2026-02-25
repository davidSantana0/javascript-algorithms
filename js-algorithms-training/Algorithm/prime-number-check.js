/**
 * Kata: Prime Number List
 * Level: Intermediate / Math
 * Platform: Personal Training
 *
 * Description:
 * Checks if a number is prime and generates a list of all
 * prime numbers up to a certain limit.
 */

function isPrime(num) {
  if (!Number.isInteger(num) || num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function listPrimes(limit) {
  let primes = [];
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

console.log(listPrimes(59).join(", "));
