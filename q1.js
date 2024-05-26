// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairs(arr, sum) {
    let pairs = [];
    let seen = new Set();
    for (let num of arr) {
        let target = sum - num;
        if (seen.has(target)) {
            pairs.push([target, num]);
        }
        seen.add(num);
    }
    return pairs;
}

let arr = [1, 5, 7, -1, 5];
let sum = 6;
console.log(findPairs(arr, sum)); // [[1, 5], [7, -1], [1, 5]]
