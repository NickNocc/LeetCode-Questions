// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    // lo tracks our lowest price
    let lo = prices[0]
    // hi tracks our highest price
    let hi = 0
    // goes through prices array 
    for (const price of prices)
    {
        // Cycles through our lowest price and the prices array to give out lowest value
        lo = Math.min(lo, price)
        // Cycles through our highest price and the price array - lo to find highest value day
        hi = Math.max(hi, price - lo)
    }
    return hi;
};