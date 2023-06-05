var isPalindrome = function (s) {
    const nonAlphanumericRegex = /[^a-z0-9]/gi;

    const modifiedStr = s.replace(nonAlphanumericRegex, "");
    const lowercaseS = modifiedStr.toLowerCase();

    const characters = lowercaseS.split("");

    const reversedCharacters = characters.reverse();

    const reversedS = reversedCharacters.join("");

    if (lowercaseS === reversedS) {
        return true;
    } else {
        return false;
    }
};
