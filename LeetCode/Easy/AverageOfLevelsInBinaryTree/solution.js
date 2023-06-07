var averageOfLevels = function(root) {
    let result = [];
    let sums = [];
    let counts = [];

    dfs(root, 0, sums, counts);

    for (let i = 0; i < sums.length; i++) {
        result.push(sums[i] / counts[i]);
    }

    return result;
};

function dfs(node, level, sums, counts) {
    if (!node) {
        return;
    }

    if (level < sums.length) {
        sums[level] += node.val;
        counts[level]++;
    } else {
        sums.push(node.val);
        counts.push(1);
    }

    dfs(node.left, level + 1, sums, counts);
    dfs(node.right, level + 1, sums, counts);
}