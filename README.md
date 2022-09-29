# TypeScript 101: Interfaces with classes
- Declare interfaces
```
interface HasAddition{
    add(x:number,y:number):number
}

interface HasSubstraction{
    sub(x:number,y:number):number
}
```
- Implement them to a class
```
class Calculator implements HasAddition,HasSubstraction {
    add(x: number, y: number): number {
        return x+y
    }
    sub(x: number, y: number): number {
        return x-y
    }
    whatever():void{}
}

let c: Calculator
c = new Calculator()
```
- Combine them at a higher level
```
interface HasName{
    name:string
}

class NamedCalculator implements Calculator,HasName{
    add(x: number, y: number): number {
        return x+y
    }
    sub(x: number, y: number): number {
        return x-y
    }
    constructor(public name:string){}
    whatever(): void {}
}

let nc:NamedCalculator
nc=new NamedCalculator('bob')
```