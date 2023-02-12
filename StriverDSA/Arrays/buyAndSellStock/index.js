/* 


BUY & SELL STOCKS

- You need to return the max profit earned 
- Profit can be max when  purchase price of the stock is min

[7, 1, 5,6,3]

BruteForce:
1. Maintaining 2 loops, 1, j. j will parse every elememt & chk if the profit is max in that round of i.
2. Then returning the value that is found to be max 


Optimal:
1. Keep a minimal variable as inifite & update any value that is lesser. MINprice = infinity
2. For first value 7, MINprice = 7
3. For 7, there is no  value higher that it, hence profit will be 0, profit = 0
4. Move to 1, MINprice =1.
5. For 1, profit =  max of [ 4(5-1) / 5(6-1) / 2(3-1) ]6. 
   Chk for number whihc is lesser than 1. There is none


Hence return  profit  = 5


 */

const buySellStock = (arr) => {
    let minPrice = Infinity
    let profit = 0
    //Profit can be max when  purchase price of the stock is min

    for (let i = 0; i < arr.length; i++) {

        minPrice = Math.min(minPrice, arr[i]);
        console.log("vall---", minPrice, arr[i]);
        profit = Math.max(profit, arr[i] - minPrice);

    }

    return profit
}

console.log(buySellStock([7, 1, 5, 3, 6, 4]))