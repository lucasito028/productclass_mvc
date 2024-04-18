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


    /* Controllers Costumers Functions */
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
    removestockFromCart(productIndex, quantity) {
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

    removeproductFromCart(productIndex) {
        const removedProduct = this.productsInCart.splice(productIndex, 1);
            if (removedProduct.length === 0) {
                console.log("Produto não encontrado no carrinho.");
            return;
        }
        console.log(`${removedProduct[0].name} removido do carrinho.`);
    }

    // Calculate Brute value
    calculateTotal() {
        let total = 0;
        for (const product of this.productsInCart) {
            total += product.price * product.stock;
        }
        return total.toFixed(2);
    }

    // Just implments discount
    implementsdiscount() {
        let total = 0;
        for (const product of this.productsInCart) {
            total += product.price * product.stock;
        }
        return total.toFixed(2);
    }



    
    /* Controllers Admin Functions*/

    createProduct(name, price, stock) {
        const newProduct = new Product(name, price, stock);
        this.productsPossible.push(newProduct);
        console.log(`${name} adicionado à lista de produtos.`);
    }
    
    updateProduct(productIndex, newName, newPrice, newStock) {

        const productToUpdate = this.productsPossible[productIndex];

        if (!productToUpdate) {
            console.log("Produto não encontrado.");
            return;
        }
        productToUpdate.name = newName;
        productToUpdate.price = newPrice;
        productToUpdate.stock = newStock;
        console.log(`${newName} atualizado.`);
    }
    
    readProduct(productIndex) {
        const product = this.productsPossible[productIndex];
        if (!product) {
            console.log("Produto não encontrado.");
            return;
        }
        console.log(`Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}`);
    }
    
    listallProduct() {
        console.log("Lista de todos os produtos:");
        this.productsPossible.forEach((product, index) => {
            console.log(`${index + 1}. Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}`);
        });
    }
    
    deleteProduct(productIndex) {
        const deletedProduct = this.productsPossible.splice(productIndex, 1);
        if (deletedProduct.length === 0) {
            console.log("Produto não encontrado.");
            return;
        }
        console.log(`${deletedProduct[0].name} removido da lista de produtos.`);
    }
    
    updatestockProduct(productIndex, newStock, time) {
        const product = this.productsPossible[productIndex];
        if (!product) {
            console.log("Produto não encontrado.");
            return;
        }
        product.updateStock(time, newStock) // Chama a função updateStock do produto com um tempo de 3 segundos e o novo estoque
            .then(response => console.log(response))
            .catch(error => console.error(error));
    }
    
    createciscount(productIndex, discount) {
        const product = this.productsPossible[productIndex];
        if (!product) {
            console.log("Produto não encontrado.");
            return;
        }
        product.createDiscount(time, discount) // Chama a função createDiscount do produto com um tempo de 3 segundos e o desconto
            .then(response => console.log(response))
            .catch(error => console.error(error));
    }
    

}

module.exports = ProductController;