const repeatString = require('../src/06')

test('Repeat String', () => {
    expect(repeatString('Makan!',3)).toEqual('Makan! Makan! Makan!')
})