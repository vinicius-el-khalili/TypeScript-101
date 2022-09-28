# TypeScript 101: Interfaces

- Interface defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".

```
interface Person {
    name:string;
    age:number;
    speak(a:string):void,
    spend(a:number):number
}

const I:Person = {
    name:'bob',
    age:32,
    speak(text:string):void{
        console.log(text)
    },
    spend(amount:number):number{
        return amount
    }
}

const greet:Function = (person:Person) => {
    console.log ("hello, ", person.name)
}
```