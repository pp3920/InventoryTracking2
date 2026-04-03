 export class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    getPriceWithTax(): number{
     let totalPrice:any = this.price;
     return totalPrice;
    }

    displayDetails(): string {
        return '${this.name} costs $${this.price} and is {this.sku}';
    }

    
}
