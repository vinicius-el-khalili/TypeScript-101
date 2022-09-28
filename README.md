# TypeScript 101: Pubic, Private & Readonly

- Access modifiers
```
class Invoice {
    readonly client: string;
    private details: string;
    public amount: number;
    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }
}
```
- readonly: variable can be read outside the class, but is unchangeable either outside or inside the class
- private: variable can't be read or changed outside the class
- public: variable can be accessed and changed inside and outside the class (default)

- Use access modifiers to declare attribute types in the constructor and declare classes the right way
```
// And THIS is how you declare a class in TypeScript
class Invoice2{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}
}
```
