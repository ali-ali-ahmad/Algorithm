var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) {
        return 1;
    }
    let ans = 10, base = 9;
    for (let i = 2; i <= n && i <= 10; i++) {
        base *= (9 - i + 2);
        ans += base;
    }
    return ans;
};