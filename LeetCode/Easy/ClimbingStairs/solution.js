var climbStairs = function(n) {
    const newArray = [1, 1];

    for (let i = 2; i <= n; i++) {
    newArray[i] = newArray[i - 1] + newArray[i - 2];
    }

    return newArray[n];
};