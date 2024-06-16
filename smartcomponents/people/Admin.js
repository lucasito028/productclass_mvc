import { People } from "./People";
import { Product } from "../product/Product"

export class Admin extends People{
    products = [
        new Product("Picanha", 22.00, 27),
        new Product("Filé Mignon", 22.10, 30),
        new Product("Wagyu Coxao Mole", 22.40, 25),
        new Product("Miolo do Acém", 22.60, 40),
        new Product("Hamburguer", 25.70, 20)
    ]

    createProduct(name, price, stock){
        return message;
    }
    updateProduct(id, name, price, stock){
        return message;
    }
    deleteProduct(id){
        return message;
    }

}