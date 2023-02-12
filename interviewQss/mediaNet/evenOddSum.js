
// Sum of digits at even place and odd places

// 2882  even ->8,2  odd-> 2,8
// 12882 even ->1,8,2 odd-> 2,8



const findSum = (num) => {
    let evenSum = 0
    let oddSum = 0

    const numIs = String(num).split('')
    numIs.map((item, index) => {
        if (index % 2 == 0) {// even
            evenSum += Number(item)
        }
        else { oddSum += Number(item) }
    })

    console.log(evenSum, oddSum)
}

findSum(2882)