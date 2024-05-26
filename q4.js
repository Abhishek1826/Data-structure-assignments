// Q4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedChar(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

let str = "swiss";
console.log(firstNonRepeatedChar(str)); // "w"
