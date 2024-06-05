import {Entity} from './Entity.js';
import {Product} from './Product.js';

export class Admin extends Entity{

    products = [    
        new Product("Produto 1", 10.10, 20),
        new Product("Produto 2", 20.30, 50),
        new Product("Produto 3", 15.50, 36),
        new Product("Produto 4", 10.90, 45),
        new Product("Produto 5", 10.20, 35),
        new Product("Produto 6", 10.10, 45),
        new Product("Produto 7", 12.44, 27),
        new Product("Produto 8", 17.90, 28),
        new Product("Produto 9", 10.80, 39),
    ];


    select(){

        return this.outputMessage;
    }
    create({values = {
        name: "",
        price: 0.00,
        stock: 0
    }}){
        return this.outputMessage;
    }
    update({values = {
        id: 0,
        name: "",
        price: 0.00,
        stock: 0
    }}){
        return this.outputMessage;
    }
    delete({id}){
        return this.outputMessage;
    }
    createDiscount(){

    }
}