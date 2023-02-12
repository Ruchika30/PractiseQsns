
// not working

const makeRowZero = (i, j, list) => {
    for (let k = 0; k < list.length; k++) {
        if (k == i) {
            for (let l = 0; l < list[k].length; l++) {
                list[k][l] = -1
            }
        }
    }
    return list
}

const makeColZero = (i, j, list) => {
    for (let k = 0; k < list.length; k++) {
        if (k == j) {
            for (let l = 0; l < list.length; l++) {
                list[l][k] = -1
            }
        }
    }
    return list
}


const setMatrixZero = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if (list[i][j] == 0) {
                makeRowZero(i, j, list)
                makeColZero(i, j, list)
            }
        }
    }

    // set all -1 to 0

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if (list[i][j] == -1) {
                list[i][j] = 0
            }
        }
    }


    return list
}

// console.log(setMatrixZero([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
console.log(setMatrixZero([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))