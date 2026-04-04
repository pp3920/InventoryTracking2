import { DigitalProduct } from './models/DigitalProduct.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { Product } from './models/Product.js';
let list = [];
const pp = new PhysicalProduct(25.5, "example-sku", "Example Product", 0);
const dp = new DigitalProduct(100, "digital-sku", "Digital Product", 10);
list.push(pp);
list.push(dp);
for (const element of list) {
    element.displayDetails();
}
//# sourceMappingURL=main.js.map