// Q3. Write a program to check if two strings are a rotation of each other?

function areRotations(str1, str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2);
}

let str1 = "ABCD";
let str2 = "CDAB";
console.log(areRotations(str1, str2)); // true
