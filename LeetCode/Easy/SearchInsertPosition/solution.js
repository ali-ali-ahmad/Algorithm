var searchInsert = function(nums, target) {
    var indexNum = 0;
    for ( var i = 0; i < nums.length; i++){
        if (nums[i] === target){
            indexNum = i;
        } else if (nums[i] < target){
            indexNum = i+1;
        }
    }
    return indexNum;
};