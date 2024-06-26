import { People } from "./People.js";
import { Product } from "../product/Product.js"

export class Costumer extends People{
    products = [
        new Product("Picanha", 22.00, 2),
        new Product("Filé Mignon", 22.10, 3),
    ];
    
    addProduct(name, price, stock){
        this.products.forEach(product => {
            if(product.name = name){
                product.stock += stock;
            }
        });
        let newProduct = new Product(name, price, stock)
        this.products.push(newProduct);
        return this.message;
    }
    removeProduct(id){
        const removeProduct = this.products.slice(id, 1);

        if (removeProduct.length === 0) {
            return this.message;
        }
        return this.message;
    }
    calculateSubTotal(id){
        if (id < 1 || id > this.products.length) {
            return this.message;
        }
    
        const product = this.products[id - 1];
        const subtotal = product.price * product.stock;
        return this.message;
    }
}