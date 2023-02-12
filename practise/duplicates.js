

/* 
Implement a function called, areThereDuplicates which accepts a variable number of
arguments, and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern 
Examples:

Examples:
        areThereDuplicates(1, 2, 3) // false
   2 areThereDuplicates(1, 2, 2) // true
   3. areThereDuplicates('a', 'b', 'c', 'a') // true
Restrictions:

*/

// 

const containsDuplicate = (numbers) => {
    return numbers.filter((item, index) => {
        return numbers.indexOf(item) != index

    })

}

const areThereDuplicates = (...numbers) => {
    console.log("containsDuplicate--", containsDuplicate(numbers));
    if (containsDuplicate(numbers).length) {
        return true
    }
    else return false
}

console.log(areThereDuplicates('a', 'b', 'c'))