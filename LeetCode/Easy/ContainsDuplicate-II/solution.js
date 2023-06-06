var containsNearbyDuplicate = function(nums, k) {

    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i]) && i - numsMap.get(nums[i]) <= k) {
            return true;
        } else {
            numsMap.set(nums[i], i)
        }
    }
    return false;
    
};