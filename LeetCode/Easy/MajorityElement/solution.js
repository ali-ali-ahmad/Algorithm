var majorityElement = function(nums) {

    const numsMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
        if (numsMap.get(nums[i]) > nums.length / 2) {
            return nums[i];
        }
    }
};