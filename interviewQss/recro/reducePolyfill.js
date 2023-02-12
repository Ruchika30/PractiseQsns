

var logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
]

const arr = [1, 2, 3, 4, 5]


const callback = (a, b) => {
    return a + b
}


/* Actual reduce
 - Accepts a callback function
 - In polyfill reduce also, we have to pass this callback function to our reduce function

 */
const reduceMethod = (arr) => {
    return arr.reduce(callback)
}

const mysum = arr.reduce(callback)
// console.log(mysum)

/******************//******************//******************/


/* Polyfill reduce

A function that accepts up to four arguments. The reduce method calls the 
callbackfn function one time for each element in the array.

Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function.

reduce(callbackfn:
     (previousValue: number,
         currentValue: number, 
         currentIndex: number, 
         array: number[]) => number): number
*/

Array.prototype.myReduce = function (callback, initialValue = null) {
    let acc = initialValue

    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc

}


const sum = arr.myReduce(callbackthis)
console.log(sum)