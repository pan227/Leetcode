/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_VALUE;
    let max_profit = 0;
    
    for(let i=0; i<prices.length; i++) {
        const v = prices[i];
        if (v<min) {
            min = v;
        } else if (v-min>max_profit) {
            max_profit = v-min;
        }
    }
    
    return max_profit;
};
