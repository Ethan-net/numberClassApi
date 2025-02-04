const {
  isPrime,
  isPerfect,
  isArmstrong,
  getDigitSum,
  getFunFact,
} = require("../utils/mathUtils");

exports.classifyNumber = (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number: "alphabet", error: true });
  }

  const num = parseInt(number, 10);
  const properties = [];

  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");

  if (isArmstrong(num)) properties.push("armstrong");
  if (isPerfect(num)) properties.push("perfect");
  if (isPrime(num)) properties.push("prime");

  res.json({
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: getDigitSum(num),
    fun_fact: getFunFact(num),
  });
};
