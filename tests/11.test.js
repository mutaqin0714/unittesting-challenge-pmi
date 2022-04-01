const user = require('../src/11')

test('find johndoe', () => {
    expect(user.findByUsername('johndoe')).toEqual({ id: 3, username: 'johndoe', name: 'John Doe' })
})