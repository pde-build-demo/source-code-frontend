const { add } = require('../src/utils');

describe('Utility functions', () => {
  test('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});