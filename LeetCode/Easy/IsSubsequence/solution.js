var isSubsequence = function(s, t) {
    if (s === t) {
        return true;
    } else if (t === "") {
        return false;
    }
    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]){
            j++;
        } 

        if (j === s.length) {
            return true
        } else if (i === t.length - 1) {
            return false;
        }

    }
};