var lengthOfLastWord = function(s) {
    var split = s.split(' ');
    let output;
    let checkNum = 1;
    while (split[split.length - checkNum].length === 0){
        checkNum = checkNum + 1;

    }
    output = split[split.length - checkNum].length;
    return output;
};