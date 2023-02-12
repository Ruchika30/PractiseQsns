// Print no of elements in an array who are greater
// than or equal to all the elements to its right side.
// [3 8 3 6 1 5 2]   4

const findMax = (arr) => {
    console.log("val--", Math.max(...arr))
    return Math.max(...arr)
}


const filterResult = (list) => {
    return list.filter((item, index) => {
        return index == list.indexOf(item)
    })
}


const findNumbers = (arr) => {
    const result = []
    for (let i = 1; i < arr.length; i++) {

        const val = findMax(arr.slice(i, arr.length))
        if (val) {
            result.push(val)

        }

    }

    return filterResult(result)
}


console.log(findNumbers([3, 8, 3, 6, 1, 5, 2]).length)