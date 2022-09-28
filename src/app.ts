interface Person {
    name:string;
    age:number;
    speak(a:string):void,
    spend(a:number):number
}

const Bob:Person = {
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