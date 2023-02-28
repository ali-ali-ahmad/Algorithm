var divide = function(dividend, divisor) {
    var result = dividend / divisor;
    
    if (result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (result < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else {
        return Math.trunc(result);
    }
};