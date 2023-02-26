var numIdenticalPairs = function(nums) {
    var counter = 0;
    for ( var i = 0; i < nums.length; i++){
        let j = i + 1;
        while (j < nums.length){
            if (nums[i] === nums[j]){
                counter++;
            }
            j += 1;
        }
    }
    return counter;
};