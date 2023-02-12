

// filter items higher than 2
const arr = [1, 2, 3, 4,]
let result = []

/* Real Filter
    1. It creates & returns an array on its own , 
        if the given condition is satisfied
*/

const callback = (item) => {
    return item > 2
}
const filtered = arr.filter(callback)
// console.log(filtered)


// POLYFIll 

Array.prototype.myFilter = function (condition) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (condition(this[i])) {
            result.push(this[i])
        }
    }
    return result
}

const myFilterResult = arr.myFilter(callback)
console.log(myFilterResult)