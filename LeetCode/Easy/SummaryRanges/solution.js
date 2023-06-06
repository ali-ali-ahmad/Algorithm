var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return [];
    }

    let result = [];
    let start = nums[0];
    let end = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === end + 1) {
            end = nums[i];
        } else {
            result.push(formatRange(start, end));
            start = end = nums[i];
        }
    }

    result.push(formatRange(start, end));

    return result;
}

function formatRange(start, end) {
    if (start === end) {
        return start.toString();
    } else {
        return start.toString() + "->" + end.toString();
    }
};