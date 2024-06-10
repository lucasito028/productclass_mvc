import {Entity} from './Entity.js';
import {Product} from './Product.js';

export class Costumer extends Entity{
    
    products = [    
        new Product("Produto 1", 10.10, 20),
        new Product("Produto 2", 20.30, 50),
        new Product("Produto 3", 15.50, 30),
    ];

    selectAllProduct(){
        return this.outputMessage;
    }
    newProduct(){
        return this.outputMessage;
    }
    addProduct(){
        return this.outputMessage;
    }
    removeProduct(){
        return this.outputMessage;
    }
    deleteProduct(){
        return this.outputMessage;
    }
    implementsDiscount(){

    }
}