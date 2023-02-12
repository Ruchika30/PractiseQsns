

const setMatrixZero = (row, col) => {
    let arr = []

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            arr[i] = []
        }

    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            arr[i][j] = j;
        }
    }


    return arr
}

console.log(setMatrixZero(4, 4))