/* 

sameFrequency(171, 711) // true
sameFrequency(31, 133) // false
*/


const sameFrequency = (number1, number2) => {
    let no1Freq = {}
    let no2Freq = {}

    let no1array = String(number1).split('')
    let no2array = String(number2).split('')

    console.log("vall--", no1array, no2array)

    if (no1array.length != no2array.length) {
        return false
    }

    for (let key of no1array) {
        no1Freq[key] = (no1Freq[key] || 0) + 1
    }


    for (let key of no2array) {
        no2Freq[key] = (no2Freq[key] || 0) + 1
    }

    console.log("---", no1Freq, no2Freq);


    for (let key in no1Freq) {
        if (no1Freq[key] != no2Freq[key])
            return false
    }

    return true
}

console.log(sameFrequency(171, 711))