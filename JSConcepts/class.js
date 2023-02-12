/* Constructors can be used for creating objects
Like for example ,if we have to create multiple objects 
for diff cars like maruti, aulto
then we can do it with the help of functional constructors

*/


// ES5 way of using classes
function generalCars({ name, speed }) {
    this.name = name;
    this.speed = speed;
    getDetail = function () {
        console.log("hey this is ", name, speed)
    }
}


const car1 = new generalCars({ name: 'maruti', speed: 200 })
const car2 = new generalCars({ name: 'aulto', speed: 100 })
// console.log(c2)

// ES6 way 

class Frutis {
    constructor(name) {
        this.name = name
    }

    getname() {
        return this.name
    }
}

const f1 = new Frutis('mango')

console.log(f1.getname())