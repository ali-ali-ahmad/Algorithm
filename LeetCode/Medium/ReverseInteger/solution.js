var reverse = function(x) {
    var newArray = String(x).split('').map(Number).reverse();
    if ( x < 0){
        newArray.pop();
    } 
    if (newArray.join('') < Math.pow(2, 31) - 1) {
        if ( x < 0){
            return - newArray.join('');
        } else {
            return newArray.join('');
        }
    } else {
        return 0;
    }
};