

// Promised obj takes 1 parameter which is a Function that takes, resolve , reject

const p = new Promise((resolve, reject) =>{
    let a= 1+1
    if(a==2){
        resolve("succcess")
    }
    else {
        reject("failed")
    }

})


// then will be called when  a promise fulfils , catch will be called when promise is rejected

p.then((mssg) =>{
console.log("mssg---", mssg);
}).catch((mssgs) =>{
    console.log("this in catch---", mssgs);
})



/* Reasl life example */

const userLeft = true
const userWatchingMeme = true

function watchTutorial(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'cat',
            mssg :'suer left'
        })
    }
    else if(userWatchingMeme){
        errorCallback({
            name: 'user',
            mssg :'wtahcing meme'
        })
    }

    else callback( 'succecss')
}

watchTutorial(())