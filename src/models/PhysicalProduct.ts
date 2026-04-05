import { calculateProductTax } from "../utils/taxCalculator.js";
import { Product } from "./Product.js";

export class PhysicalProduct extends Product {
    private weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;

    }

    public getPriceWithTax(): number {
        let x = calculateProductTax(this, this.taxPercentage) ;
       return x;
    }


    // return the formatted weight
    public getWeight(): string {
        return `${this.weight.toFixed(1)} kg`;
    }

    public displayDetails(): string {
        return `${super.displayDetails()} and weight ${this.getWeight()}`;
    }
}