function repeatString(text,times=1) {
    let results = ''
    for (let index = 0; index < times; index++) {;
        if(index == 0) {
            results = text;
        } else {
            results += ' '+text
        }
    }

    return results
}

module.exports = repeatString