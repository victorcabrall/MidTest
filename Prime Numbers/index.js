function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function printFirstNPrimes(n) {
  let count = 0;
  let num = 2;
  const primes = [];

  while (count < n) {
    if (isPrime(num)) {
      primes.push(num);
      count++;
    }
    num++;
  }

  return primes;
}

const numberOfPrimesToPrint = 10;
const primeNumbers = printFirstNPrimes(numberOfPrimesToPrint);
console.log(`Primeiros ${numberOfPrimesToPrint} números primos ${primeNumbers.join(", ")}`);
