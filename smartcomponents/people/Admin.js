import { People } from "./People.js";
import { Product } from "../product/Product.js"
import { Discount } from "../product/Discount.js";

export class Admin extends People{
    products = [
        new Product("Picanha", 22.00, 27),
        new Product("Filé Mignon", 22.10, 30),
        new Product("Wagyu Coxao Mole", 22.40, 25),
        new Product("Miolo do Acém", 22.60, 40),
        new Product("Hamburguer", 25.70, 20)
    ];
    

    createProduct(name, price, stock){
        
        this.products.forEach(product => {
            if(product.name = name){
                return;
            }
        });
        let newProduct = new Product(name, price, stock)
        this.products.push(newProduct);
        return this.message;
    }
    
    updateProduct(id, name, price, stock){
        const productUpdate = this.products[id];

        if (!productUpdate) {
            this.output("Produto não encontrado.");
            return;
        }
        productUpdate.name = name;
        productUpdate.price = price;
        productUpdate.stock = stock;

        return this.message;
    }
    deleteProduct(id){
        const deletedProduct = this.products.slice(id, 1);

        if (deletedProduct.length === 0) {
            return this.message;
        }
        return this.message;
    }

    createDiscount(name, percentage, timeSeconds){
        
        this.discounts.forEach(discount => {
            if(discount.name = name){
                return this.message;
            }
        });
        let newDiscount = new Discount(name, percentage, timeSeconds)
        this.discounts.push(newDiscount);
        return this.message;
    }
    updateDiscount(id, name, percentage, timeSeconds){
        const discountUpdate = this.discounts[id];

        if (!discountUpdate) {
            return this.message;
        }
        discountUpdate.name = name;
        discountUpdate.percentage = percentage;
        discountUpdate.timeSeconds = timeSeconds;

        return this.message;
    }
    deleteDiscount(id){
        const deletedDiscount = this.discounts.slice(id, 1);

        if (deletedDiscount.length === 0) {
            return this.message;
        }
        return this.message;
    }
}