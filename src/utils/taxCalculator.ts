import { Product } from "../models/Product.js";


export function calculateProductTax(product: Product, taxPercentage: number): number {
    return calculateTax(product.getPrice(), taxPercentage);
}

function calculateTax(price: number, taxPercentage: number): number {
    return ((price * (1 + taxPercentage / 100)));
  
}