import { Product } from './Product.js';
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(weight: number, sku: string, name: string, price: number);
    getPriceWithTax(): number;
    getWeight(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map