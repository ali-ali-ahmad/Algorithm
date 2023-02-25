var removeElement = function(nums, val) {
    let newArray = nums.filter(num => num !== val);
    for (var i = 0; i < newArray.length; i++){
        nums[i] = newArray[i];
    }
    if (newArray.length <= 1 && nums[0] == val){
        nums.splice(0, nums.length);
    } else {
        nums.splice(newArray.length, nums.length -1);
    }
};