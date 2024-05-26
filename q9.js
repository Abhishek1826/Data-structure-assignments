// Q9. Write a program to reverse a stack.

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        return this.items.join(' ');
    }
}

function insertAtBottom(stack, item) {
    if (stack.isEmpty()) {
        stack.push(item);
    } else {
        let temp = stack.pop();
        insertAtBottom(stack, item);
        stack.push(temp);
    }
}

function reverseStack(stack) {
    if (!stack.isEmpty()) {
        let temp = stack.pop();
        reverseStack(stack);
        insertAtBottom(stack, temp);
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Original Stack");
console.log(stack.printStack());

reverseStack(stack);

console.log("Reversed Stack");
console.log(stack.printStack());
