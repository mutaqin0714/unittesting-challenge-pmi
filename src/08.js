function arrayMirroring(numberList) {
    let arrRev = numberList.concat(numberList.slice().reverse());
    return arrRev
}

module.exports = arrayMirroring