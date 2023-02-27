var countDigits = function(num) {
    var newArray = String(num).split('').map(Number);
    let counter = 0;
    for ( var i = 0; i < newArray.length; i++){
        if (num % newArray[i] === 0){
            counter++;
        }
    }
    return counter;
};