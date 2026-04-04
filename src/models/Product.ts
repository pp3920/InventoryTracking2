 export class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    getPrice():number{
        return this.price;
    }

    getPriceWithTax(): number{
        return this.price;
    }

    displayDetails(): string {
        return '${this.name} costs $${this.price} and is {this.sku}';
    }

    
}
