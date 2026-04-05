import { calculateProductTax } from "../utils/taxCalculator.js";



export class Product {
    private sku: string;
    private name: string;
    private price: number;
    protected taxPercentage: number = 10;   //with tax

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public getPriceWithTax(): number {
        let x = calculateProductTax(this, this.taxPercentage);
        return x;
    }

    public displayDetails(): string {
        return `${this.name} costs $${this.price} and is its sku is  ${this.sku}`
    }


}