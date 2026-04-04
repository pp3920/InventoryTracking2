import { Product } from './Product.js';
export class PhysicalProduct extends Product {
    weight;
    constructor(weight, sku, name, price) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        const taxRate = 0.1; // default tax rate
        const totalPrice = this.price * (1 + taxRate);
        return totalPrice;
    }
    getWeight() {
        return '${this.name} costs $${this.price} and weight is {this.weight}';
    }
}
//# sourceMappingURL=PhysicalProduct.js.map