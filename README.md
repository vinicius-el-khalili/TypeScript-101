# TypeScript 101: Generics

- Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use. Generics makes it easier to write reusable code.

```
const f1 = (obj:any)=>{}
const g1 = <T>(obj:T)=>{}
const h1 = <T extends {name:string}>(obj:T)=>{}
```