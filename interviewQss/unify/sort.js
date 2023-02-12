// Round 2 


// Sort the array, shud have unique

const arr = ["a", "b", "a", "d", "c", "c"];

const uniqueArry = (arr) => {
    const sortedArr = arr.sort();
    const values = [...new Set(sortedArr)];
    return values;
};
