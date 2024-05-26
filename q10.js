// Q10. Write a program to find the smallest number using a stack.

class Stack {
    constructor() {
        this.items = [];
        this.minStack = [];
    }

    push(element) {
        this.items.push(element);
        if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(element);
        }
    }

    pop() {
        let poppedElement = this.items.pop();
        if (poppedElement === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return poppedElement;
    }

    min() {
        return this.minStack[this.minStack.length - 1];
    }
}

let stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.min()); // 3
stack.push(2);
stack.push(1);
console.log(stack.min()); // 1
stack.pop();
console.log(stack.min()); // 2
