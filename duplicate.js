

//  Input: nums = [1,2,3,1]
//  Output: true

//  Input: nums = [1,2,3,4]
// Output: false


const arry = [1, 2, 1, 3, 4, 3, 5];

/**
 * @param {number[]} nums
 * @return {boolean}
 */


var containsDuplicate = function (nums) {
    return nums.filter((item, index) => {
        return arry.indexOf(item) !== index
    });
}

const chkDuplicate = (arr) => {

    if (containsDuplicate(arr))
        return true
    else return false
}


console.log(chkDuplicate(arry))