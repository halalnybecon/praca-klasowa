class ShoppingItem {
    id;
    name;
    quantity;
    isBought;
    constructor(id, name, quantity, isBought = false) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
    }
    toggle() {
        this.isBought = !this.isBought;
    }
    render() {
        return `
        <div">
            <p>${this.id}</p>
            <h3>${this.name}</h3>
            <p>${this.quantity}</p>
            <button">Delete</button>
        </div>`;
    }
}
export default ShoppingItem;
