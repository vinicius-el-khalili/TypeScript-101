# TypeScript 101: The DOM & Type Casting

- error: Object is possibly 'null'
```
const anchor = document.querySelector('a');
console.log(anchor.href);
```
TypeScript doesn't have special access to the html files in the project.
If TypeScript is not sure about the existence of a given element, it will raise an error.
- Non-null assertion operator (!)
```
const anchor = document.querySelector('a')!;
console.log(anchor.href);
```
- TypeScript uses special types for every DOM element
```
const element: HTMLAnchorElement|HTMLDivElement|...
```
- Each element type has a set of methods
```
console.log(anchor.href);
```
- Type casting
```
//    -> const type: Element | null
const type1 = document.querySelector('#type');
//    -> const type: HTMLSelectElement
const type2 = document.querySelector('#type') as HTMLSelectElement;
//    Now all the element type methods are available
console.log(type.value);
```