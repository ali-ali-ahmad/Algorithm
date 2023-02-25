var romanToInt = function(s) {
    var num = [];
for (var i = 0; i<s.length;i++){
    if ((s[i] == "I" && (s[i+1] == "V" ||s[i+1] =="X"))||
    (s[i] == "X" && (s[i+1] == "L" ||s[i+1] =="C"))||
    (s[i] == "C" && (s[i+1] == "D" ||s[i+1] =="M"))){
        var newitem = s[i]+s[i+1];
        i = i +1;
    } else{newitem = s[i]};
    num.push(newitem)  ;          
}

var numbers = 0
for(i = 0;i<num.length;i++){
    var newnumber
    switch(num[i]){
        case "I":
            newnumber = 1;
            break;
        case "V":
            newnumber = 5;
            break;
        case "X":
            newnumber = 10;
            break;
        case "L":
            newnumber = 50;
            break;
        case "C":
            newnumber = 100;
            break;
        case "D":
            newnumber = 500;
            break;
        case "M":
            newnumber = 1000;
            break;
        case "IV":
            newnumber = 4;
            break;
        case "IX":
            newnumber = 9;
            break;
        case "XL":
            newnumber = 40;
            break;
        case "XC":
            newnumber = 90;
            break;
        case "CD":
            newnumber = 400;
            break; 
        case "CM":
            newnumber = 900;
            break;  
        default:
            newnumber = 0;
    }
    numbers = numbers + newnumber
    
}

return(numbers)
};