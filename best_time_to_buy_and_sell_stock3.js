/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let oneBuyOneSell = 0;
    let twoBuyTwoSell = 0;
    let oneBuy = Number.NEGATIVE_INFINITY
    let twoBuy = Number.NEGATIVE_INFINITY;
    
    for(let i = 0; i < prices.length; i++) {
      let p = prices[i];
      oneBuy = Math.max(oneBuy, -p);
      oneBuyOneSell = Math.max(oneBuyOneSell, p + oneBuy);
      twoBuy = Math.max(twoBuy, oneBuyOneSell - p);
      twoBuyTwoSell = Math.max(twoBuyTwoSell, p + twoBuy);
    }
    
    return twoBuyTwoSell;
  };
  