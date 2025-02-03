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

exports.getFunFact = (num) => {
  if (exports.isArmstrong(num)) return `${num} is an Armstrong number!`;
  if (exports.isPerfect(num)) return `${num} is a Perfect number!`;
  return num % 2 === 0
    ? `${num} is an even number.`
    : `${num} is an odd number.`;
};
