var canIWin = function(maxChoosableInteger, desiredTotal) {
    if ((maxChoosableInteger + 1) * maxChoosableInteger / 2 < desiredTotal) {
        return false;
    }
    const memo = new Map();
    function dfs(remaining, mask) {
        if (memo.has(mask)) {
            return memo.get(mask);
        }
        for (let i = 1; i <= maxChoosableInteger; i++) {
            const curr = 1 << i;
            if ((curr & mask) === 0) {
                if (i >= remaining || !dfs(remaining - i, curr | mask)) {
                    memo.set(mask, true);
                    return true;
                }
            }
        }
        memo.set(mask, false);
        return false;
    }
    return dfs(desiredTotal, 0);
};