
var logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
]

const callback = (item) => {
    return item
}

// Actual MAP
const realMap = (arr) => {
    return arr.map(callback)
}

// As Map returns an array , we do console.log
console.log(realMap(logicAlbums))


/******************//******************//******************/

// POLYFILL  MAP
Array.prototype.myMap = function () {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(this[i])
    }

    return result
}


const mapPolyfil = (arr) => {
    return arr.myMap()
}

console.log(mapPolyfil(logicAlbums))