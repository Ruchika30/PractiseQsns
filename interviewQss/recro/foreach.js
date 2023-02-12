
const names = ["ali", "hamza", "jack"];

// ACTUAL FOREACH

const callback = (item) => {
    console.log(item)
}

const myFunction = (names) => {
    return names.forEach(callback)

}

myFunction(names)

/******************//******************//******************/


// POLYFILL FOREACH

Array.prototype.myForeach = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i])
    }

}

const myFunctionForeach = (names) => {
    return names.myForeach(callback)

}

myFunctionForeach(names)