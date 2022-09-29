# TypeScript 101: Tuples

- Tuple: index type structure
```
let tuple: [string,number,boolean]
tuple = ["string",0,false]
tuple = ["stuff",1,true]
tuple = ["thing",2,false]
```
- Union types: no index type structure
```
let array: (string|number|boolean)[]
array = ["string",0,false]
array = [1,true,"stuff"]
array = [false,"thing",2]
```