export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    getPriceWithTax() {
        let totalPrice = this.price;
        return totalPrice;
    }
    displayDetails() {
        return '${this.name} costs $${this.price} and is {this.sku}';
    }
}
//# sourceMappingURL=Product.js.map