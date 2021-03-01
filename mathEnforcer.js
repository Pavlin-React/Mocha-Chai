let describe = require('mocha').describe
let assert = require('chai').assert

let mathEnforcer = {
  addFive: function (num) {
    if (typeof(num) !== 'number') {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof(num) !== 'number') {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
      return undefined;
    }
    return num1 + num2;
  }
};

describe('mathEnforcer', () => {
  describe('add', () => {
    it('add-1', () => {
      assert.isUndefined(mathEnforcer.addFive('a'))
      assert.isUndefined(mathEnforcer.addFive('undefined'))
      assert.isNaN(mathEnforcer.addFive(NaN))
    })
    it('add-2', () => {
      assert.equal(mathEnforcer.addFive(-5), 0)
      assert.equal(mathEnforcer.addFive(0), 5)
    })
  })

  describe('subtract', () => {
    it('first', () => {
      assert.isUndefined(mathEnforcer.subtractTen('a'), 'param')
      assert.isUndefined(mathEnforcer.subtractTen('undefined'))

    })

    it('minus', () => {
      assert.equal(mathEnforcer.subtractTen(0), -10)
      assert.equal(mathEnforcer.subtractTen(-5), -15)
      assert.equal(mathEnforcer.subtractTen(1.2), -8.8)
      assert.equal(mathEnforcer.subtractTen(-1.1), -11.1)
      assert.equal(mathEnforcer.subtractTen(10.2), 0.1999999999999993)
    })
  })

  describe('sum', () => {
    it('sum-1', () => {
      assert.isUndefined(mathEnforcer.sum(3, '3'))
      assert.isUndefined(mathEnforcer.sum('3', 3))


    })

    it('sum-2', () => {
      assert.equal(mathEnforcer.sum(5, 4), 9)
      assert.equal(mathEnforcer.sum(1.2, 1.3), 2.5)
      assert.equal(mathEnforcer.sum(-1, -1), -2)
      assert.equal(mathEnforcer.sum(-1.1, -1.2), -2.3)
      assert.equal(mathEnforcer.sum(0.2, 0.3), 0.5)
      assert.equal(mathEnforcer.sum(1.3, -1.2), 0.10000000000000009)
    })
  })
})
