

const pascals = (n) => {
    let string = ''
    let sum = 0
    let numbers = []

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            numbers[i] = new Array(i)

            if (j == 1 || j == i) {
                numbers[i][j] = 1
                console.log("vall---", i, j, numbers[i][j]);
                // it has 1 on the first, last position of every row
                string = string + 1
            }

            else {
                // sum of above 2

            }
        }
        string = string + '\n'
    }

    console.log("ball--", numbers.length, numbers);

    // for (let i = 1; i <= numbers.length; i++) {
    //     for (let j = 1; j <= i; j++) {
    //         console.log("numbers---", numbers[i][j])
    //     }

    // }

    console.log(string);

}

pascals(5)