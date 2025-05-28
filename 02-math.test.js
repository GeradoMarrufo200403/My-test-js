const {sum, multiply, divide, average} = require('./02-math.js');

test('adds 1 + 3 to equal 4', () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
}
);

test('multiplies 2 * 3 to equal 6', () => {
  const result = multiply(2, 3);
  expect(result).toBe(6);
}
);
test('divides 6 / 3 to equal 2', () => {
  const result = divide(6, 3);
  expect(result).toBe(2);
}
);
test('average function cases', () => {
  expect(average([2, 4, 6])).toBe(4);
  expect(average([])).toBeNull();
  // expect(average([1, 'a', 3])).toBeNull();
});

test('average returns null if array contains null values', () => {
  expect(average([2, null, 4])).toBeNull();
});