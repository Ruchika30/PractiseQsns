



/* 

Given an array of integers and a number, write a function called maxSubarraySum, which
finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. In the first
example below, [100, 200, 300] is a subarray of the original aray, but [100, 300] is not.
        maxSubarraySum([100,200,300,400], 2) // 700
        maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39


*/

const maxSubarraySum = (arr, num) => {
    let sum = 0
    let tmpSum = 0
    let value = 0

    if (arr.length < num)
        return null


    for (let i = 0; i < num; i++) {
        sum = sum + arr[i]
    }

    tmpSum = sum

    /* 
        Find sum of first n numbers => tmpSum
        Move to next term, add that, subtract the previous nth term
    
    */

    for (let i = num; i < arr.length; i++) {
        console.log("vall--", arr[i], arr[i - num])
        tmpSum = tmpSum + arr[i] - arr[i - num]
        value = Math.max(tmpSum, sum)
    }

    return value

}

console.log(maxSubarraySum([100, 200, 300, 400], 2))