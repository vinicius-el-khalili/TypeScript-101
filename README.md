# TypeScript 101: Function Basics

- Declare
```
let f:Function;
```
- Variables
```
const f = (x:number,y:number)=>{}
```
- Default values
```
const f = (x:string="default")=>{}
```
- Optional variables
```
const f = (x?:string)=>{}
```
- Return type is inferred by tsc but you can also declare it
```
const f = (x:string):void=>{console.log(x)}
const f = (x:string):string=>{return x}
```
