var shipWithinDays = function(weights, days) {
    let minCapacity = Math.max(...weights);
    let maxCapacity = weights.reduce((sum, w) => sum + w);
    
    while (minCapacity < maxCapacity) {
        let midCapacity = Math.floor((minCapacity + maxCapacity) / 2);
        let daysNeeded = 1;
        let weightLoaded = 0;
        for (let w of weights) {
            if (weightLoaded + w > midCapacity) {
                daysNeeded++;
                weightLoaded = 0;
            }
            weightLoaded += w;
        }
        if (daysNeeded <= days) {
            maxCapacity = midCapacity;
        } else {
            minCapacity = midCapacity + 1;
        }
    }
    
    return minCapacity;
};