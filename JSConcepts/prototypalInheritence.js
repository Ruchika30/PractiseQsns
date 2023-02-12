
// Method 1. of creating object
// Object literal
const obj = {
    name: "ruchika",
    lstName: "sood"
}


// Method 2. - Using constructor function
/*If you wish to add  a prototype, then always add it in constructor funtion.
Never in object literal*/

// constructor function
function Obj({ name }) {
    this.name = name
}

Obj.prototype.getname = function () {
    return this.name
}

const car1 = new Obj({ name: 'maruti' })
console.log(car1.getname()) // maruti

const car2 = new Obj({ name: 'aulto' })
console.log(car2.getname()) // aulto