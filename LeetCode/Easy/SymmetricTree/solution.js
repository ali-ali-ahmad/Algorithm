var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }

    return checkSymmetry(root.left, root.right);
};

var checkSymmetry = function(left, right) {
    if (left === null && right === null) {
        return true;
    }

    if (left === null || right === null || left.val !== right.val) {
        return false;
    }

    return checkSymmetry(left.left, right.right) && checkSymmetry(left.right, right.left);
};