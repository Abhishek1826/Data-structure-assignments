// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function isOperator(x) {
    return x === '+' || x === '-' || x === '*' || x === '/';
}

function postToPre(post_exp) {
    let stack = [];
    for (let char of post_exp) {
        if (isOperator(char)) {
            let op1 = stack.pop();
            let op2 = stack.pop();
            stack.push(char + op2 + op1);
        } else {
            stack.push(char);
        }
    }
    return stack[0];
}

let post_exp = "ABC/-AK/L-*";
console.log(postToPre(post_exp)); // "*-A/BC-/AKL"
