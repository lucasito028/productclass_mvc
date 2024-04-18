const Product = require('./Product');

class ProductController {
    constructor() {
        
        this.productsPossible = [

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

        this.productsInCart = [];
    }

    /* Controllers da Funcoes do Cliente */
    addToCart(productIndex, quantity) {
        const product = this.productsPossible[productIndex];
        if (!product) {
            console.log("Produto não encontrado.");
            return;
        }
        if (product.stock < quantity) {
            console.log("Quantidade solicitada indisponível.");
            return;
        }

        const existingProductIndex = this.productsInCart.findIndex(prod => prod.name === product.name);
        if (existingProductIndex !== -1) {
            this.productsInCart[existingProductIndex].stock += quantity;
        } else {
            this.productsInCart.push(new Product(product.name, product.price, quantity));
        }

        console.log(`${quantity} ${product.name}(s) adicionado(s) ao carrinho.`);
    }

    // Remove um produto do carrinho pelo índice do array
    removeFromCart(productIndex, quantity) {
        const productInCart = this.productsInCart[productIndex];
        if (!productInCart) {
            console.log("Produto não encontrado no carrinho.");
            return;
        }

        if (productInCart.stock < quantity) {
            console.log("Quantidade a ser removida maior do que a disponível no carrinho.");
            return;
        }

        productInCart.stock -= quantity;
        if (productInCart.stock === 0) {
            this.productsInCart.splice(productIndex, 1);
        }

        console.log(`${quantity} ${productInCart.name}(s) removido(s) do carrinho.`);
    }

    // Calcula o total no carrinho
    calculateTotal() {
        let total = 0;
        for (const product of this.productsInCart) {
            total += product.price * product.stock;
        }
        return total.toFixed(2);
    }

    implementsdiscount() {
        let total = 0;
        for (const product of this.productsInCart) {
            total += product.price * product.stock;
        }
        return total.toFixed(2);
    }


    /* Controllers da Funcoes do Admin */

    createProduct() {

    }
    updateProduct() {

    }
    readProduct() {

    }
    listallProduct() {

    }
    deleteProduct() {

    }
    updatestockProduct() {

    }
    createciscount() {

    }

}

module.exports = ProductController;