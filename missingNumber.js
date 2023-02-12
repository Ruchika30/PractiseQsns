/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(list) {
    const upperLimit = list.length
    const missing = []


for(let i =1; i<=upperLimit ;i++){
    if(list.indexOf(i) == -1 ){
        missing.push(i)
    }
}
    
return missing
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));