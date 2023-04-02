var successfulPairs = function(spells, potions, success) {
    let outPut = new Array(spells.length).fill(0);
    potions.sort((a, b) => a - b);

    for ( var i = 0; i < spells.length; i++){
        let j = binarySearch(potions, success / spells[i]); 
        outPut[i] = potions.length - j;
    }

    return outPut;
};

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}