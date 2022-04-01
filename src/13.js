function stats(dataset) {
    var means = mean(dataset);
    var medians = median(dataset);
    var ranges = rangeBigLow(dataset);
    var modes = mode(dataset);
    const sum = dataset.reduce((acc, curr) => acc + curr, 0);
    var counts = dataset.length

    var range = ranges[0] - ranges[1]
    var largest = ranges[0]
    var smallest = ranges[1]

    var results = {
        "mean": means,
        "median": medians,
        "range": range,
        "mode": modes,
        "largest": largest,
        "smallest": smallest,
        "sum": sum,
        "count": counts
    }

    return results
}

function mean(numbers) {
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}

function median(numbers) {
    var median = 0, numsLen = numbers.length;
    numbers.sort();
 
    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }
 
    return median;
}

function mode(numbers) {
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    
    var resultMode = ''
    for (let index = 0; index < modes.length; index++) {
        const valMode = modes[index]; 
        if (index == 0) {
            resultMode = valMode
        } else {
            resultMode += ', '+valMode
        }
    }

    resultMode += ' each appeared 2 times or more 1 times'
 
    return resultMode;
}
 
function rangeBigLow(numbers) {
    numbers.sort(function(a, b) {
        return b - a;
    });
    
    var bigLowesInt = [numbers[0], numbers[numbers.length - 1]];

    return bigLowesInt
}

module.exports = stats