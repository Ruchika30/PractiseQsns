/* 

Rotate Array:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]


AFTER REFERING
https://dev.to/seanwelshbrown/two-ways-to-rotate-an-array-in-javascript-1bi3


*/

const rotateArray = (nums, k) => {
    // reverse helper function
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    k %= nums.length;

    /* 
STEPS
nums = [1, 2, 3, 4, 5]

k = 2
=> [4, 5, 1, 2, 3]


1. original array reversed
[5, 4, 3, 2, 1]

2.  reverse just the first (k) elements
[4, 5, 3, 2, 1]

// see where we're going?

3.  reverse from (k) to the end
[4, 5, 1, 2, 3] 
    
    */
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));

    return nums;


}

console.log("rotateArray---", rotateArray([1, 2], 3))