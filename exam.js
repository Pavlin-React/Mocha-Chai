let describe = require('mocha').describe
let assert = require('chai').assert

const numberOperations = {
  powNumber: function (num) {
    return num * num;
  },
  numberChecker: function (input) {
    input = Number(input);

    if (isNaN(input)) {
      throw new Error('The input is not a number!');
    }

    if (input < 100) {
      return 'The number is lower than 100!';
    } else {
      return 'The number is greater or equal to 100!';
    }
  },
  sumArrays: function (array1, array2) {

    const longerArr = array1.length > array2.length ? array1 : array2;
    const rounds = array1.length < array2.length ? array1.length : array2.length;

    const resultArr = [];

    for (let i = 0; i < rounds; i++) {
      resultArr.push(array1[i] + array2[i]);
    }

    resultArr.push(...longerArr.slice(rounds));

    return resultArr
  }
};

describe('numberOperations', () => {
  it('powNumber', function () {
    assert.equal(numberOperations.powNumber(5), 25)
    assert.equal(numberOperations.powNumber(0), 0)
    assert.equal(numberOperations.powNumber(-2), 4)
  })

  it('numberChecker', function () {
    assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!')
    assert.throw(() => numberOperations.numberChecker('undefined'), 'The input is not a number!')
    assert.throw(() => numberOperations.numberChecker('isNaN'), 'The input is not a number!')

    assert.throw(() => numberOperations.numberChecker({}), 'The input is not a number!')
    assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
    assert.equal(numberOperations.numberChecker(-1), 'The number is lower than 100!')
    assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!')
    assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
    assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!')
  })

  it('sumArrays', function () {
    assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2]), [2, 4, 3])
    assert.deepEqual(numberOperations.sumArrays([1, 2], [1, 2]), [2, 4])
    assert.deepEqual(numberOperations.sumArrays([1], [1]), [2])
    assert.deepEqual(numberOperations.sumArrays([-1, -2], [1, 2, 3]), [0, 0, 3])
    assert.deepEqual(numberOperations.sumArrays([-1, -2, -3], [-1, -2, -3]), [-2, -4, -6])
    assert.deepEqual(numberOperations.sumArrays([-1, 10.2, -3], [-1, -10, -3]), [-2, 0.1999999999999993, -6])

  })

})

