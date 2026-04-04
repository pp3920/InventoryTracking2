import { Product } from './Product.js';
export class DigitalProduct extends Product {
    fileSize;
    constructor(fileSize, sku, name, price) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        const taxRate = 0.0; // default tax rate
        const totalPrice = this.price * (1 + taxRate);
        return totalPrice;
    }
    getfileSize() {
        return '${this.name} costs $${this.price} and the filesize {this.fileSize}';
    }
}
//# sourceMappingURL=DigitalProduct.js.map