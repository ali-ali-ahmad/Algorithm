var hammingWeight = function(n) {
    let counter = 0;
    let binaryN = n.toString(2);

    for (let i = 0; i < binaryN.length; i++) {
        if (parseInt(binaryN.charAt(i)) === 1) {
            counter++;
        }
    }
    return counter;
};