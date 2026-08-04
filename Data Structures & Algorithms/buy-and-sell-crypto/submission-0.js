class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minprice = prices[0];
        let maxprofit = 0 ;
        for (let i = 0 ; i < prices.length;i++){
            if (minprice > prices[i] ){
                minprice = prices[i]
            }
            let profit = prices[i] - minprice;
            if (profit > maxprofit){
                maxprofit = profit;
            }
        }
        return maxprofit;
    }
}
