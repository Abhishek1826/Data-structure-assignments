
// Q7. Write a program to convert prefix expression to infix expression.

function preToInfix(pre_exp) {
    let stack = [];
    for (let i = pre_exp.length - 1; i >= 0; i--) {
        let char = pre_exp[i];
        if (isOperator(char)) {
            let op1 = stack.pop();
            let op2 = stack.pop();
            stack.push('(' + op1 + char + op2 + ')');
        } else {
            stack.push(char);
        }
    }
    return stack[0];
}

let pre_exp = "*-A/BC-/AKL";
console.log(preToInfix(pre_exp)); // "((A-(B/C))*((A/K)-L))"
