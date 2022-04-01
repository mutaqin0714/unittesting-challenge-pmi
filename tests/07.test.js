const repeatLetter = require('../src/07')

test('Repeat Letter "Hello World! " tobe HHeelllloo WWoorrlldd!!', () => {
    expect(repeatLetter('Hello World! ',2)).toEqual('HHeelllloo WWoorrlldd!!')
})