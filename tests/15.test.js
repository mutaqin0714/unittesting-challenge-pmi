const romanToDecimal = require('../src/15')

test('Roman VII is 7', () => {
    expect(romanToDecimal('VII')).toEqual(7)
})