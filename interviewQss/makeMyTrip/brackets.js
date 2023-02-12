


// "[(])"  - no balanced
// "[(){}]"  - balanced

const findBrackets = (str) => {
    const result = []
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    if (str.length % 2 != 0) {
        console.log("Not balanced")
    }

    for (let i = 0; i < str.length; i++) {
        if (brackets[str[i]]) {
            // pushing "[" or "{"  or "(" in array
            result.push([str[i]])
        }

        else if (brackets[result.pop()] !== str[i]) {
            // It will come here in case of "]" or "}" or ")"
            // so it will pop the last bracket & chk its value with current character
            // So if the last pushed bracket is "[", then the current character 
            // should be equal to the bracket["["] . ie. "]"
            // If not then return "Not balanced"
            return false
        }
    }

    return true

}


console.log(findBrackets("[(){}]"))