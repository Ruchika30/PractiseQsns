const move = (arr) =>{

    let arr= arr.sort((a, b) => a-b)

// return v1   
    arr.reverse()

}


console.log(move([0,1,0,3,12]))