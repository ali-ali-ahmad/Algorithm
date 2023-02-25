var plusOne = function(digits) {
    var i = digits.length - 1;
    while (i >= 0 && digits[i] === 9) {
        digits[i] = 0;
        i--;
    }
    if (i >= 0) {
        digits[i]++;
    } else {
        digits.unshift(1);
    }
    return digits;
};