import { Product } from "./Product.js";


export class DigitalProduct extends Product {
    private fileSize: number;


    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    //no tax for digital products

    public getPriceWithTax(): number {
        return this.getPrice();
    }


    public getFileSize(): string {
        return `${this.fileSize} MB`;
    }

    displayDetails(): string {
        return `${super.displayDetails()} and weight ${this.getFileSize()}`;
    }
}