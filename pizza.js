let describe = require('mocha').describe
let assert = require('chai').assert


let pizzUni = {
  makeAnOrder: function (obj) {

    if (!obj.orderedPizza) {
      throw new Error('You must order at least 1 Pizza to finish the order.');
    } else {
      let result = `You just ordered ${obj.orderedPizza}`
      if (obj.orderedDrink) {
        result += ` and ${obj.orderedDrink}.`
      }
      return result;
    }
  },

  getRemainingWork: function (statusArr) {

    const remainingArr = statusArr.filter(s => s.status != 'ready');

    if (remainingArr.length > 0) {

      let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
      let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

      return pizzasLeft;
    } else {
      return 'All orders are complete!'
    }

  },

  orderType: function (totalSum, typeOfOrder) {
    if (typeOfOrder === 'Carry Out') {
      totalSum -= totalSum * 0.1;

      return totalSum;
    } else if (typeOfOrder === 'Delivery') {

      return totalSum;
    }
  }
}

describe('pizza', () => {
  it('makeAnOrder', function () {
    let pizza = {orderedPizza: 'pizza'}
    let pizza1 = {orderedPizza: 'pizza', orderedDrink: 'drink'}
    assert.throw(() => pizzUni.makeAnOrder({orderedDrink: 'drink'}), 'You must order at least 1 Pizza to finish the order.')
    assert.throw(() => pizzUni.makeAnOrder({}), 'You must order at least 1 Pizza to finish the order.')
    assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered ${pizza.orderedPizza}`)
    assert.equal(pizzUni.makeAnOrder(pizza1), `You just ordered ${pizza1.orderedPizza} and ${pizza1.orderedDrink}.`)
  });

  it('getRemainingWork', () => {
    let arr1 = [
      {pizzaName: 'pizza', status: 'ready' },
      {pizzaName: 'pizza1', status: 'ready' },
      {pizzaName: 'pizza2', status: 'preparing'},
      {pizzaName: 'pizza3', status: 'preparing'}
      ]
    let arr2 = [
      {pizzaName: 'pizza', status: 'ready' },
      {pizzaName: 'pizza1', status: 'ready' }
    ]
    let arr3 = [
      {pizzaName: 'pizza3', status: 'preparing'},
      {pizzaName: 'pizza1', status: 'preparing'}
    ]

    assert.equal(pizzUni.getRemainingWork(arr2), 'All orders are complete!')
    assert.equal(pizzUni.getRemainingWork(arr1), 'The following pizzas are still preparing: pizza2, pizza3.')
    assert.equal(pizzUni.getRemainingWork(arr3), 'The following pizzas are still preparing: pizza3, pizza1.')
  })

  it('orderType', function () {
    assert.equal(pizzUni.orderType(100, 'Carry Out'),90)
    assert.equal(pizzUni.orderType(100, 'Delivery'),100)
  });
})
