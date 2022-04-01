const Item = require('../src/12')

test('find ID 5 is On Sale True', () => {
    expect(Item.findById(5).isOnSale()).toBe(true)
})