// This is a JavaScript Quiz from BFE.dev

const obj = {
    dev: 'bfe',
    a: function () {
        return this.dev
    },
    b() {
        return this.dev
    },
    c: () => {
        return this.dev
    },
    d: function () {
        return (() => {
            return this.dev
        })()
    },
    e: function () {
        return this.b()
    },
    f: function () {
        return this.b
    },
    g: function () {
        return this.c()
    },
    h: function () {
        return this.c
    },
    i: function () {
        return () => {
            return this.dev
        }
    }
}

console.log(obj.a()) //bfe
console.log(obj.b()) // bfe
console.log(obj.c())// bfe
console.log(obj.d()) //function
console.log(obj.e()) // bfe
console.log(obj.f()()) // errr
console.log(obj.g()) // bfe
console.log(obj.h()())// bfe
console.log(obj.i()()) // fn def