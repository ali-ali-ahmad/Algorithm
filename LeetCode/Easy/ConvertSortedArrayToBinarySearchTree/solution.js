var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    const mid = Math.floor(nums.length / 2);
    const newNode = new TreeNode(nums[mid]);

    newNode.left = sortedArrayToBST(nums.slice(0, mid));
    newNode.right = sortedArrayToBST(nums.slice(mid + 1));

    return newNode;
};