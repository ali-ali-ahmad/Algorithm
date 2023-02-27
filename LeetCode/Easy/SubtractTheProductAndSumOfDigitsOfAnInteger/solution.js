var subtractProductAndSum = function(n) {
    var newArray = String(n).split('').map(Number);
    let product = 1;
    let sum = 0;
    for ( var i = 0; i < newArray.length; i++){
        product = product * newArray[i];
        sum += newArray[i];
    }
    return product - sum;
};