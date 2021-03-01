let describe = require('mocha').describe
let assert = require('chai').assert

function lookupChar(string, index) {
  if (typeof(string) !== 'string' || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe('tests', () => {
  it('first', () => {
    assert.isUndefined(lookupChar(5, 1))
    assert.isUndefined(lookupChar('sdse', 'des'))
    assert.isUndefined(lookupChar('sdse', 1.2))
  })

  it('second', () => {
    assert.equal(lookupChar('asdf', 5), 'Incorrect index')
    assert.equal(lookupChar('asdf', -1), 'Incorrect index')
  })

  it('third', () => {
    assert.equal(lookupChar('asd', 0), 'a')
    assert.equal(lookupChar('asd', 1), 's')
  })
})
