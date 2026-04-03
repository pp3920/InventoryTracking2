import { Product } from './Product.js';

 export class PhysicalProduct  extends Product {
    weight:number;

    constructor(weight:number, sku:string, name:string, price:number)
    {  
        super(sku, name, price);
        this.weight = weight;
    }
     

    getPriceWithTax(): number {
        const taxRate = 0.1; // default tax rate
        const totalPrice = this.price * (1 + taxRate);
        return totalPrice;
    }

    getWeight():string{
         return '$weight is {this.weight}';

    }

    displayDetails(): string {
        return '${super.displayDetails()} and weight ${this.getWeight}';
    }
}