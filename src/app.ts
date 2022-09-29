const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
type.value=""
const from = document.querySelector('#tofrom') as HTMLInputElement
from.value=""
const amount = document.querySelector('#amount') as HTMLInputElement

// class Item
class Item {
    constructor(
        readonly type:string,
        readonly from:string,
        readonly amount:number,
    ){}
    format(){
        let msg:string
        switch (this.type) {
            case "Payment":
                msg=`${this.type} from ${this.from}: ${Math.abs(this.amount)} Gold`
                break;
            case "Loan":
                msg=`${this.type} to ${this.from}: ${Math.abs(this.amount)} Gold`
                break;
            default:
                msg=""
                break;
        }
        return msg;
    }
}

// class ListTemplate
class ListTemplate {
    constructor (private container: HTMLUListElement){}
    render(item: Item, heading:string, position: 'start'|'end'){
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerText=heading
        li.append(h4)
        const p = document.createElement('p')
        p.innerText=item.format()
        li.append(p)
        this.container.append(li)
    }
}

// Handle form submission
const ul = document.querySelector("ul") as HTMLUListElement
let l = new ListTemplate(ul)
form.addEventListener("submit",(e:Event)=>{
    e.preventDefault()
    let item = new Item(type.value,from.value,amount.valueAsNumber)
    l.render(item,item.type,'start')
    //
    type.value =""
    from.value=""
    amount.value=""
})
