function sum (a, b) {
  return a + b;
}

function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  return a / b;
}

function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  if (arr.some(x => typeof x !== 'number' || isNaN(x))) return null;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function average(numbers) {
  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some(n => typeof n !== 'number' || n === null)
  ) {
    return null;
  }

  const total = numbers.reduce((acc, val) => acc + val, 0);
  return total / numbers.length;
}


module.exports = {
  sum, multiply, divide, average};
