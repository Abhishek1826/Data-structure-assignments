// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsBalanced(expr) {
    let stack = [];
    for (let char of expr) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            let top = stack.pop();
            if ((char === ')' && top !== '(') || (char === '}' && top !== '{') || (char === ']' && top !== '[')) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

let expr = "{()}[]";
console.log(areBracketsBalanced(expr)); // true
