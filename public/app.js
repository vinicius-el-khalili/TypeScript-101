"use strict";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
type.value = "";
const from = document.querySelector('#tofrom');
from.value = "";
const amount = document.querySelector('#amount');
// class Item
class Item {
    constructor(type, from, amount) {
        this.type = type;
        this.from = from;
        this.amount = amount;
    }
    format() {
        let msg;
        switch (this.type) {
            case "Payment":
                msg = `${this.type} from ${this.from}: ${Math.abs(this.amount)} Gold`;
                break;
            case "Loan":
                msg = `${this.type} to ${this.from}: ${Math.abs(this.amount)} Gold`;
                break;
            default:
                msg = "";
                break;
        }
        return msg;
    }
}
// class ListTemplate
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        this.container.append(li);
    }
}
// Handle form submission
const ul = document.querySelector("ul");
let l = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let item = new Item(type.value, from.value, amount.valueAsNumber);
    l.render(item, item.type, 'start');
    //
    type.value = "";
    from.value = "";
    amount.value = "";
});
// tuples
// Tuple: index structure
let tuple;
tuple = ["string", 0, false];
tuple = ["stuff", 1, true];
tuple = ["thing", 2, false];
// Union types: no index structure
let array;
array = ["string", 0, false];
array = [1, true, "stuff"];
array = [false, "thing", 2];
