function isPrime(number) {
    let isPrime = true;
    // check if number is equal to 1
    if (number === 1) {
        isPrime = false
    }

    // check if number is greater than 1
    else if (number > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

    }

    return isPrime
}

module.exports=isPrime