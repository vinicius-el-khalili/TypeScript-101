// Without type alias
const greet = (user:{name:string,id:string|number})=>{
    console.log(`${user} says hi`)
}
// With type alias
type StrNum = string|number
type userObj = {name:string, id:StrNum}
const greetAgain = (user:userObj)=>{
    console.log(`${user} says hi`)
}