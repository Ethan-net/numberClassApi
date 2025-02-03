const funFacts = {
  0: "Zero is the only number that can't be represented by Roman numerals.",
  1: "One is the multiplicative identity, meaning any number multiplied by 1 remains unchanged.",
  2: "Two is the only even prime number.",
  3: "Three is the first odd prime number.",
  7: "The number 7 is considered lucky in many cultures.",
  10: "A googol is 1 followed by 100 zeroes!",
  default: [
    "Pi is an irrational number and goes on forever!",
    "Every even number greater than 2 is the sum of two prime numbers (Goldbach's conjecture).",
    "Numbers in binary are written using only 0s and 1s.",
    "Infinity is not a number but a concept!",
  ],
};

const getMathFacts = (num) => {
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  return {
    number: num,
    isPrime: isPrime(num),
    isEven: num % 2 === 0,
    factorial: num > 20 ? "Too large to compute" : factorial(num),
    funFact:
      funFacts[num] ||
      funFacts.default[Math.floor(Math.random() * funFacts.default.length)],
  };
};

module.exports = { getMathFacts };
