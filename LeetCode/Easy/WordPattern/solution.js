var wordPattern = function(pattern, s) {
    var sArr = s.split(" ");
    if (pattern.length !== sArr.length) {
        return false;
    }

    const patternMap = new Map();
    const sMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const patternChar = pattern[i];
        const sWord = sArr[i];

        if (!sMap.has(sWord) && !patternMap.has(patternChar)) {
        sMap.set(sWord, patternChar);
        patternMap.set(patternChar, sWord);
        } else if (
            sMap.get(sWord) !== patternChar 
            || patternMap.get(patternChar) !== sWord
            ) {
        return false;
        }
    }

    return true;
};