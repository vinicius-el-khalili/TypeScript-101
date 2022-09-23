# TypeScript 101: Arrays and Objects

- Arrays are strictly typed if all of its initial values are of the same type.
- 'let l=[1,2,3]; l.push(true)' -> error
- You can, however, have different types in an array if it is initially declared as so.
- 'let l=['A',2,false]; l.push(true)' -> ok
- Object properties are strictly typed and its structure is fixed. New properties can not be added to the object on the run.
- `let obj = {name:'john',age:30}; obj.name=0` -> error
- `let obj = {name:'john',age:30}; obj.id=123` -> error