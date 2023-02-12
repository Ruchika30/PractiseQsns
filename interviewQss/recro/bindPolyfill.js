


function getname(args) {
    console.log("hi ", this.name, args)
}


const obj = {
    name: "ruchika"
}

//Actual bind
const val = getname.bind(obj, 'hahha')
console.log(val())

/******************//******************//******************/

// Polyfill bind

Function.prototype.myBind = function (obj, args) {
    let func = this
    return function () {
        func.apply(obj, args)
    }
}



const mymyBindval = getname.myBind(obj, ['hahha'])
mymyBindval()