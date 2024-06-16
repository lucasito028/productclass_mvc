import { People } from "./People";
import { Product } from "../Product"

export class Costumer extends People{
    products = [
        new Product("Picanha", 22.00, 2),
        new Product("Filé Mignon", 22.10, 3),
    ]

    addProduct(id){
        return message;
    }
    addqtdProduct(id, stock){
        return message;
    }
    removeProduct(id, stock){
        return message;
    }
    calculateSubTotal(id){
        return message;
    }
}