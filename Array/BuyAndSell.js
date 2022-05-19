// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    var highestPrice = 0
    
    for(var i = 0; i < prices.length; i++) {
        if (prices[i] > highestPrice) {
            highestPrice = prices[i]
        } else {
            return 0
        }
    }
};