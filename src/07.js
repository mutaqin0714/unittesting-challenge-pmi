function repeatLetter(text, times=1) {
    var spText = text.split('')
    let results = ''
    for (let index = 0; index < spText.length; index++) {
        const chars = spText[index];
        if (chars != ' ') {
            for (let j = 0; j < times; j++) {
                results += chars
            }
        } else {
            results += ' '
        }
    }

    return results.trim()
}

module.exports = repeatLetter