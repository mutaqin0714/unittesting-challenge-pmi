const stats = require('../src/13')

test('statistic', () => {
    expect(stats([10, 2, 38, 23, 38, 23, 21])).toEqual({
        "mean":22.142857142857142,
        "median":23,
        "range":36,
        "mode":"23, 38 each appeared 2 times or more 1 times",
        "largest":38,
        "smallest":2,
        "sum":155,
        "count":7
        })
})