// src/utils.js

exports.isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

exports.isPerfect = (n) => {
  if (n < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
};

exports.isArmstrong = (n) => {
  const digits = String(n).split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === n;
};

exports.getDigitSum = (n) => {
  return String(n)
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
};

// Generates a fun fact based on the number's properties
exports.getFunFact = (num) => {
  if (exports.isArmstrong(num)) {
    const digits = String(num).split("").map(Number);
    const power = digits.length;
    const calculation = digits.map((d) => `${d}^${power}`).join(" + ");
    return `${num} is an Armstrong number because ${calculation} = ${num}`;
  }

  if (exports.isPerfect(num)) {
    return `${num} is a Perfect number because the sum of its proper divisors equals ${num}.`;
  }

  if (exports.isPrime(num)) {
    return `${num} is a Prime number because it is only divisible by 1 and itself.`;
  }

  return num % 2 === 0
    ? `${num} is an Even number because it is divisible by 2.`
    : `${num} is an Odd number because it is not divisible by 2.`;
};
