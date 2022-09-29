"use strict";
// Implement them to a class
class Calculator {
    add(x, y) {
        return x + y;
    }
    sub(x, y) {
        return x - y;
    }
    whatever() { }
}
let c;
c = new Calculator();
class NamedCalculator {
    constructor(name) {
        this.name = name;
    }
    add(x, y) {
        return x + y;
    }
    sub(x, y) {
        return x - y;
    }
    whatever() { }
}
let nc;
nc = new NamedCalculator('bob');
