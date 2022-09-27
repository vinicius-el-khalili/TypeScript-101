"use strict";
class SomeClass {
    constructor(v1, v2, v3) {
        this.var1 = v1;
        this.var2 = v2;
        this.var3 = v3;
    }
    get concatenate() {
        return this.var1 + this.var2;
    }
    format() {
        return `${this.var1}, ${this.var2}, ${this.var3}`;
    }
}
// testing
let classList = [];
classList.push(new SomeClass('a', 'b', 0));
classList.push(new SomeClass('c', 'd', 1));
classList.push(new SomeClass('e', 'f', 2));
classList.forEach(c => {
    console.log(c.format(), c.concatenate);
});
