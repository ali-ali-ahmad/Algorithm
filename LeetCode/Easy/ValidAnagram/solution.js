var isAnagram = function(s, t) {
    
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map();

    for (const char of s) {
        sMap.set(char, (sMap.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!sMap.has(char) || sMap.get(char) === 0) {
            return false;
        }
        sMap.set(char, sMap.get(char) - 1);
    }

    return true;
};