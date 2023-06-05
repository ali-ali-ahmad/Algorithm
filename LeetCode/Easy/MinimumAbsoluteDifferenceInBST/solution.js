const getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prevValue = -Infinity;

    function traverse(node) {
        if (node === null) {
        return;
        }

        traverse(node.left);

        minDiff = Math.min(minDiff, node.val - prevValue);
        prevValue = node.val;

        traverse(node.right);
    }

    traverse(root);
    return minDiff;
};