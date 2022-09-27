# TypeScript 101: The DOM & Type Casting

- error: Object is possibly 'null'
```
const anchor = document.querySelector('a');
console.log(anchor.href);
```
TypeScript doesn't have special acess to the html files in the project.
If TypeScript is not sure about the existence of a given element, it will raise an error.

- Non-null assertion operator
```
const anchor = document.querySelector('a')!;
console.log(anchor.href);
```
The non-null assertion operator tells the TypeScript compiler that a value typed as optional cannot be null or undefined.

- TypeScript automatically contains special types for every DOM element.
```
const element: HTMLAnchorElement|HTMLDivElement|...
```
Element types have specific methods for each given element.
```
console.log(anchor.href);
```
- Type casting
There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
Casting is the process of overriding a type.
```
//    -> const type: Element | null
const type1 = document.querySelector('#type');
//    -> const type: HTMLSelectElement
const type2 = document.querySelector('#type') as HTMLSelectElement;
//    Now all the element type methods are available
console.log(type.value);
```