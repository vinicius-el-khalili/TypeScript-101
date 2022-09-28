class Invoice {
    readonly client: string;    // readonly: variable can be read outside the class, but is unchangeable either outside or inside the class
    private details: string;    // private: variable can't be read or changed outside the class
    public amount: number;      // public: variable can be accessed and changed inside and outside the class (default)
    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }
}
// And THIS is how you declare a class in TypeScript
class Invoice2{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}
}