let productExceptSelf = function (nums) {
    let product = 1;
    let output = [];
    let index = 0;

    while (index < nums.length){
        for(let i = 0; i < nums.length; i++){
            if(i == index){
                continue;
            }
            if(i != index){ 
                product = product * nums[i];
            }
        }
        output.push(product);
        product = 1;
        index++
    }
    return output;
};