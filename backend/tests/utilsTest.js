const { sum } = require('../utils');

describe('Utility Functions', () => {
  it('should return sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
