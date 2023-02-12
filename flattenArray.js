
//Input
//["a",["b","c"],["d","e",["f","g"]],"h","i"]
// output [a,b,c,d,e,f,g,h,i]


const flattenedArray = [];
const flattenArray = (arrayToFlatten) => {
  // const flattenedArray = [];
  arrayToFlatten.map((item) => {
    if (!Array.isArray(item)) {
      flattenedArray.push(item);
    } else {
      flattenArray(item);
    }
  });
};
console.log("flattenedArray is ", flattenedArray);

flattenArray(["a", ["b", "c"], ["d", "e", ["f", "g"]], "h", "i"]);


