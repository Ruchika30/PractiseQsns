


//  Creating range like function wch will return an array with n for a given start, end elements

function range(start, end) {
    return Array(10).fill().map((_, idx) => start + idx)
  }

const list = range(1, upperLimit)
console.log(list);
