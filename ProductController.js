import {Product} from './Product.js';

export class ProductController {

    constructor() {
        productsPossible = [

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

        productsInTheCart = [
            new Product("Produto 1", 10.10, 2),
        ];
    }

    output(message){
        alert (message);
    }

    listallProductfromcart() {
        msg = `Lista de Todos os Produtos`;

    }

    // Calculate Brute value
    calculateTotal() {
       
    }


    
    /* Controllers Costumers Functions */
    addToCart(id, qtd) {

    }


    // Altera a quantidade de um produto do carrinho pelo índice do array
    alterstockfromcart(id, qtd) {
    }

    removeproductFromCart(id) {
        
    }

    calculateSubtotalByIndex(id) {
    }

    // Just implments discount
    implementsdiscount() {
    }

    checkout() {
        alert("Venda finalizada. Obrigado por comprar conosco!");
        this.productsInCart = []; 
    }



    
    /* Controllers Admin Functions*/

    createProduct(name, price, stock) {

        const newProduct = new Product(name, price, stock);

        this.productsPossible.push(newProduct);

        this.output(`${name} adicionado à lista de produtos.`);
    }
    
    updateProduct(id, new_name, new_price, new_stock) {

        const product_to_update = this.products_possible[id];

        if (!product_to_update) {
            this.output("Produto não encontrado.");
            return;
        }
        product_to_update.name = new_name;
        product_to_update.price = new_price;
        product_to_update.stock = new_stock;

        this.output(`${newname} atualizado.`);
    }
    
    readProduct(id) {
        const product = this.products_possible[id];
        if (!product) {
            this.output("Produto não encontrado.");
            return;
        }
        this.output(`Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}`);
    }
    
    listallProduct() {
        let msg;
        msg += "Lista de todos os produtos:\n\n";
        this.products_possible.forEach((product, index) => {
            msg += `${index + 1}. Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}\n`;
        });
        this.output(msg);
    }
    
    deleteProduct(id) {
        const deletedProduct = this.productsPossible.splice(id, 1);
        if (deletedProduct.length === 0) {
            this.output("Produto não encontrado.");
            return;
        }
        this.output(`${deletedProduct[0].name} removido da lista de produtos.`);
    }
    
    updatestockProduct(id, new_stock, time) {
        const product = this.productsPossible[id];

        if (!product) {
            this.output("Produto não encontrado.");
            return;
        }

        product.updateStock(time, new_stock).then(response => this.output(response))
            .catch(error => this.output(error));
    }
    
    createciscount(id, discount) {
        const product = this.productsPossible[id];

        if (!product) {
            this.output("Produto não encontrado.");
            return;
        }

        product.createDiscount(time, discount).then(response => this.output(response))
            .catch(error => this.output(error));
    }
    
}

//module.exports = ProductController;