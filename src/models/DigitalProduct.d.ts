import { Product } from './Product.js';
export declare class DigitalProduct extends Product {
    fileSize: number;
    constructor(fileSize: number, sku: string, name: string, price: number);
    getPriceWithTax(): number;
    getfileSize(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map