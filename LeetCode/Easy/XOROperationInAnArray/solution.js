var xorOperation = function(n, start) {
    var nums = []
    let result = nums[0];
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2 * i
        result = result ^ nums[i];
    }
    return result;
};