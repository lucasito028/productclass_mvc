import { People } from "./People";
import { Product } from "../Product"

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
        return message;
    }
    removeProduct(id){
        const removeProduct = this.products.slice(id, 1);

        if (removeProduct.length === 0) {
            return;
        }
        return message;
    }
    calculateSubTotal(id){
        if (id < 1 || id > this.products.length) {
            return "ID de produto inválido.";
        }
    
        const product = this.products[id - 1];
        const subtotal = product.price * product.stock;
        return message;
    }
}