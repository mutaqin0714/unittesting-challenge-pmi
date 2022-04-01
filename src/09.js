function symmetrical(Chars) {
    let str = Chars.toString()
    var lowStr = str.toLowerCase()
    var str2 = str.split('').reverse().join('').toLowerCase()
    return lowStr == str2
}

module.exports = symmetrical