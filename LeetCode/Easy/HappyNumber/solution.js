var isHappy = function(n) {
    const nMap = new Map();
    while (n !== 1) {
        if (nMap.has(n)) {
            return false;
        }
        nMap.set(n, getNext(n));
        n = getNext(n);
    }
    return true;
};

function getNext(n) {
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

// var isHappy = function(n) {
//     let slow = n;
//     let fast = getNext(n);
    
//     while (fast !== 1 && slow !== fast) {
//         slow = getNext(slow);
//         fast = getNext(getNext(fast));
//     }
    
//     return fast === 1;
// };

// function getNext(n) {
//     let sum = 0;
//     while (n > 0) {
//         const digit = n % 10;
//         sum += digit * digit;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }