class ShoppingItem{
    id : number;
    name : string;
    quantity : number;
    isBought : boolean;

    constructor(id:number,name:string,quantity:number,isBought = false){
        this.id=id;
        this.name=name;
        this.quantity=quantity;
        this.isBought=isBought;
    }

    toggle() : void{
        this.isBought=!this.isBought;
    }
    render(){
        return `
        <div">
            <p>${this.id}</p>
            <h3>${this.name}</h3>
            <p>${this.quantity}</p>
            <button">Delete</button>
        </div>`;
    }
}

export default ShoppingItem