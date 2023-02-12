

/* 
Write a function called isSubsequence which takes in two strings and checks whether the
characters in the first string form a subsequence of the characters in the second string. In
other words, 

the function should check whether the characters in the first string appear
somewhere in the second string, without their order changing.
ExamplOc:

Examples:
        isSubsequence('hello', 'hello world'); // true
        isSubsequence('sing', 'sting'); // true
        isSubsequence('abc', 'abracadabra'); // true
        isSubsequence('abc', 'acb'); // false (order matters)


*/


// this is incomplete soln , wont pass for 'sing', 'sting'

const isSubsequence = (stringToCheck, str) => {
    let updatedStr = str.split(' ')

    if (updatedStr.includes(stringToCheck)) {
        return true
    }

    return false
}


console.log(isSubsequence('sing', 'sting'))