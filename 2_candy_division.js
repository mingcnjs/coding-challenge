function divide_candy(n) {
  let result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i - 1);
      if (i !== Math.sqrt(n)) result.push(n / i - 1);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(divide_candy(30));
console.log(divide_candy(25));
