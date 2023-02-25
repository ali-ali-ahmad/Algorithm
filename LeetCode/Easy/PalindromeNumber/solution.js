var isPalindrome = function(x) {
    const newX = x.toString().split('');
    for (var i = 0; i < newX.length / 2; i++) {
    var j = newX.length - 1 - i;
        if (newX[i] != newX[j]){
            return false;
        } else {
            continue;
        }
    }
        return true;
};