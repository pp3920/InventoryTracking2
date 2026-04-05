import { DigitalProduct } from "./models/DigitalProduct.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { Product } from "./models/Product.js";

let prodList: Product[] = [];

const physicalProd = new PhysicalProduct("pd1", "Laptop", 1000, 2); //sku name price
const digitalProd = new DigitalProduct("pd2", "E-book", 20, 100);

prodList.push(physicalProd);
prodList.push(digitalProd);


prodList.forEach((product) => {
   console.log(product.displayDetails());
    console.log(`Price with tax: ${product.getPriceWithTax()}\n`);
});