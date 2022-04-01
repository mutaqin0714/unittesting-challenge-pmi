const isLeapYear = require('../src/04')

test('2000 year is true',() => {
    expect(isLeapYear(2000)).toBe(true)
})