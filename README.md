# TypeScript 101: Generics

- Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use. Generics makes it easier to write reusable code.

```
const f = (obj:any)=>{}
const g = <T>(obj:T)=>{}
const h = <T extends {name:string}>(obj:T)=>{}
```