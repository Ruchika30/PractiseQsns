

const plusOne=(numbr) =>{


    let currentNumber = numbr.join('')
    currentNumber= parseInt(currentNumber)
    console.log("currentNumber--", currentNumber, typeof currentNumber);

    currentNumber = Number(currentNumber)+1


    const arr = String(currentNumber).split('')
    return arr.map((item) =>{
        return Number(item)
    })

}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))