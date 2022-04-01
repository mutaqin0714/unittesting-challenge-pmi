const censor = require('../src/10')

test('Saya ingin makan nasi goreng toBe #### ingin makan #### goreng.', () => {
    expect(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toEqual('#### ingin makan #### goreng.')
})