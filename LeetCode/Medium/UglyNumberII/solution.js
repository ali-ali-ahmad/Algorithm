var nthUglyNumber = function(n) {
    var arrayN = new Array(n);
    arrayN[0] = 1;

    var i2 = 0, i3 = 0, i5 = 0;
    var next2 = 2, next3 = 3, next5 = 5;
    
    for (var i = 1; i < n; i++) {
        var min = Math.min(next2, next3, next5);
        arrayN[i] = min;
        if (min === next2) {
            i2++;
            next2 = arrayN[i2] * 2;
        }
        if (min === next3) {
            i3++;
            next3 = arrayN[i3] * 3;
        }
        if (min === next5) {
            i5++;
            next5 = arrayN[i5] * 5;
        }
    }
    return arrayN[n-1];
};