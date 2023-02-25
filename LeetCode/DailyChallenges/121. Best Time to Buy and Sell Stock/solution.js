var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    let buyIndex = 0;
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[buyIndex]) {
            buyIndex = i;
        } else {
            let currentProfit = prices[i] - prices[buyIndex];
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }

    return maxProfit;
};