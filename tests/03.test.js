const mebiToKibi = require('../src/03')

test('2 Mb tobe 2048 Kb', () => {
    expect(mebiToKibi(2)).toBe(2048);
});