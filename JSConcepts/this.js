

const obj ={
     myfunction2(){
         console.log(this == global)
     },

     myfunction5(){
        console.log(this == global)
    },

     myfunction3(){
         function myfunction7(){
            console.log(this == global)
        }

        myfunction7()                   // will give this as global, since called with no obj refrence
     }
}

const  test2 = obj.myfunction3
// test2()
console.log(test2())                              // gives global is true  as a function is directly invoked without any obj

// const  test = obj.myfunction2()    // gives global is false, as function called with an obj refrence
// obj.myfunction7()