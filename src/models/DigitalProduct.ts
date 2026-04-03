import { Product } from './Product.js';

export class DigitalProduct  extends Product {
    fileSize:number;

    constructor(fileSize:number, sku:string, name:string, price:number)
    {  
        super(sku, name, price);
        this.fileSize = fileSize;
    }
     

      getPriceWithTax(): number {
        const taxRate = 0.0; // default tax rate
        const totalPrice = this.price * (1 + taxRate);
        return totalPrice;
    }

    getfileSize():string{
         return '${this.fileSize}';

    }

    displayDetails(): string {
        return '${super.displayDetails()} and weight ${this.getfileSize()}';
    }
    

}