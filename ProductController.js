import {Product} from './Product.js';

export class ProductController {

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

        this.productsInCart = [
            new Product("Produto 1", 10.10, 2),
        ];
    }

    listallProductfromcart() {
        let msg;
        msg += "Lista de todos os produtos:\n\n";
        this.productsInCart.forEach((product, index) => {
            msg += `${index + 1}. Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}\n`;
        });
        alert(msg);
    }

    // Calculate Brute value
    calculateTotal() {
        let total = 0;
        for (const product of this.productsInCart) {
            total += product.price * product.stock;
        }
        return total.toFixed(2);
    }


    
    /* Controllers Costumers Functions */
    addToCart(productIndex, qtd) {

        const product = this.productsPossible[productIndex];
        if (!product) {
            alert("Produto não encontrado.");
            return;
        }
        if (product.stock < qtd) {
            alert("Quantidade solicitada indisponível.");
            return;
        }

        const existingProductIndex = this.productsInCart.findIndex(prod => prod.name === product.name);
        if (existingProductIndex !== -1) {
            this.productsInCart[existingProductIndex].stock += qtd;
        } else {
            this.productsInCart.push(new Product(product.name, product.price, qtd));
        }

        alert(`${qtd} ${product.name}(s) adicionado(s) ao carrinho.`);
    }


    // Altera a quantidade de um produto do carrinho pelo índice do array
    alterstockfromcart(productIndex, qtd) {

        const productInCart = this.productsInCart[productIndex];
        if (!productInCart) {
            alert("Produto não encontrado no carrinho.");
            return;
        }
        productInCart.stock += qtd;
        alert(`Ficou no ${productInCart.name}: ${productInCart.stock} ao carrinho.`);
    }

    removeproductFromCart(productIndex) {
        const removedProduct = this.productsInCart.splice(productIndex, 1);

            if (removedProduct.length === 0) {
                alert("Produto não encontrado no carrinho.");
            return;
        }

        alert(`${removedProduct[0].name} removido do carrinho.`);
    }

    calculateSubtotalByIndex(id) {
        const product = this.productsInCart[id];
        if (!product) {
            alert("Produto não encontrado no carrinho.");
            return 0; 
        }
        return (product.price * product.stock).toFixed(2);
    }

    // Just implments discount
    implementsdiscount() {
        let total = 0;
        for (const product of this.productsInCart) {
            total += product.price * product.stock;
        }
        return total.toFixed(2);
    }

    checkout() {
        alert("Venda finalizada. Obrigado por comprar conosco!");
        this.productsInCart = []; 
    }



    
    /* Controllers Admin Functions*/

    createProduct(name, price, stock) {

        const newProduct = new Product(name, price, stock);

        this.productsPossible.push(newProduct);

        alert(`${name} adicionado à lista de produtos.`);
    }
    
    updateProduct(productIndex, newName, newPrice, newStock) {

        const productToUpdate = this.productsPossible[productIndex];

        if (!productToUpdate) {
            alert("Produto não encontrado.");
            return;
        }
        productToUpdate.name = newName;
        productToUpdate.price = newPrice;
        productToUpdate.stock = newStock;
        alert(`${newName} atualizado.`);
    }
    
    readProduct(productIndex) {
        const product = this.productsPossible[productIndex];
        if (!product) {
            alert("Produto não encontrado.");
            return;
        }
        alert(`Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}`);
    }
    
    listallProduct() {
        let msg;
        msg += "Lista de todos os produtos:\n\n";
        this.productsPossible.forEach((product, index) => {
            msg += `${index + 1}. Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}\n`;
        });
        alert(msg);
    }
    
    deleteProduct(productIndex) {
        const deletedProduct = this.productsPossible.splice(productIndex, 1);
        if (deletedProduct.length === 0) {
            alert("Produto não encontrado.");
            return;
        }
        alert(`${deletedProduct[0].name} removido da lista de produtos.`);
    }
    
    updatestockProduct(productIndex, newStock, time) {
        const product = this.productsPossible[productIndex];
        if (!product) {
            alert("Produto não encontrado.");
            return;
        }
        product.updateStock(time, newStock) // Chama a função updateStock do produto com um tempo de 3 segundos e o novo estoque
            .then(response => alert(response))
            .catch(error => alert(error));
    }
    
    createciscount(productIndex, discount) {
        const product = this.productsPossible[productIndex];
        if (!product) {
            alert("Produto não encontrado.");
            return;
        }
        product.createDiscount(time, discount) // Chama a função createDiscount do produto com um tempo de 3 segundos e o desconto
            .then(response => alert(response))
            .catch(error => alert(error));
    }
    
}

//module.exports = ProductController;