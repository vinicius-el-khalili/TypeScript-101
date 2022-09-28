"use strict";
const Bob = {
    name: 'bob',
    age: 32,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
const greet = (person) => {
    console.log("hello, ", person.name);
};
