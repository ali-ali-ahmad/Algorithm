var isPowerOfTwo = function(n) {
    let counter = 0;
    while ( Math.pow(2, counter) < n ){
        counter++
    }
    if (Math.pow(2, counter) === n){
        return true;
    } else {
        return false;
    }
};