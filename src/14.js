function isIsogram(datax) {
    var spText = datax.split('')

    return spText.map((item,i,dataArr) => {
        const intF = dataArr.filter((dataf) => {
            return dataf == item
        })
        return intF.length
        
    }).every((item2) => {
        return item2 == 1
    })

}

module.exports=isIsogram