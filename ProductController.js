import {Product} from './Product.js';

export class ProductController {

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
    msg="";

    /* Basic Function */
    output(message){
        alert(message);
    }

    
    /* Costumers Functions */
    listallProductFromCart() {

        if (this.productsInTheCart.length === 0) {
            this.output("O carrinho está vazio.");
            return;
        }
    
        this.msg = `Lista de Todos os Produtos`;
        this.productsInTheCart.forEach((product, index) => {
            this.msg += `${index + 1}. Produto: ${product.name}, Preço Unitário: ${product.price.toFixed(2)}, Quantidade: ${product.quantity}\n`;
        });

        return `${this.msg}\n`;
    }

    addToCart(id, qtd) {
    
        const productToAdd = this.productsPossible[id - 1]; 

        if (!productToAdd) {
            this.output("Produto não encontrado.");
            return;
        }
        if (productToAdd.stock < qtd) {
            this.output("Quantidade solicitada indisponível em estoque.");
            return;
        }
    
        const existingProductIndex = this.productsInTheCart.findIndex(product => product.name === productToAdd.name);
    
        if (existingProductIndex !== -1) {
            this.productsInTheCart[existingProductIndex].quantity += qtd;
        } else {
            const productCopy = new Product(productToAdd.name, productToAdd.price, qtd);
            this.productsInTheCart.push(productCopy);
        }
    
        productToAdd.stock -= qtd;
    
        this.output(`${qtd} unidades de ${productToAdd.name} adicionadas ao carrinho.`);
    }

    alterStockFromCart(id, qtd) {
        if (id < 1 || id > this.productsInTheCart.length) {
            this.output("ID de produto inválido.");
            return;
        }
    
        const productToUpdate = this.productsInTheCart[id - 1];
    
        if (!productToUpdate) {
            this.output("Produto não encontrado no carrinho.");
            return;
        }
    
        const productPossible = this.productsPossible.find
        (product => product.name === productToUpdate.name);
        const currentStock = productPossible ? productPossible.stock + productToUpdate.quantity : 0;
    
        if (currentStock < qtd) {
            this.output("Quantidade solicitada indisponível em estoque.");
            return;
        }
    
        productPossible.stock -= (qtd - productToUpdate.quantity);
        productToUpdate.quantity = qtd;
    
        this.output(`Quantidade do produto ${productToUpdate.name} atualizada para ${qtd}.`);
    }

    removeProductFromCart(id) {
        if (id < 1 || id > this.productsInTheCart.length) {
            this.output("ID de produto inválido.");
            return;
        }
    
        const removedProduct = this.productsInTheCart.splice(id - 1, 1)[0]; 

        const productPossible = this.productsPossible.find(product => product.name === removedProduct.name);
        if (productPossible) {
            productPossible.stock += removedProduct.quantity;
        }
    
        this.output(`O produto ${removedProduct.name} foi removido do carrinho.`);
    }

    calculateSubtotalById(id) {
        if (id < 1 || id > this.productsInTheCart.length) {
            this.output("ID de produto inválido.");
            return;
        }
    
        const product = this.productsInTheCart[id - 1];
        const subtotal = product.price * product.quantity;
    
        this.output(`Subtotal do produto ${product.name}: $${subtotal.toFixed(2)}`);
    }

    implementsDiscount() {
    
    }

    calculateTotalFromCard(){
        let total = 0;

        this.productsInTheCart.forEach(product => {
            const subtotal = product.price * product.quantity;
            total += subtotal;
        });

        this.output(`Total a ser pago: $${total.toFixed(2)}`);
    }

    checkout() {
        alert("Venda finalizada. Obrigado por comprar conosco!");
        this.productsInTheCart = []; 
    }



    /* Admin Functions
    */
    listAllProduct() {
        this.msg += "Lista de todos os produtos:\n\n";
        this.productsPossible.forEach((product, id) => {
            this.msg += `${id + 1}. Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}\n`;
        });
        return this.msg;
    }

    createProduct(name, price, stock) {
        const newProduct = new Product(name, price, stock);

        this.productsPossible.push(newProduct);

        this.output(`${name} adicionado à lista de produtos.`);
    }
    
    updateProduct(id, newName, newPrice, newStock) {
        const productToUpdate = this.productsPossible[id];

        if (!productToUpdate) {
            this.output("Produto não encontrado.");
            return;
        }
        productToUpdate.name = newName;
        productToUpdate.price = newPrice;
        productToUpdate.stock = newStock;

        this.output(`${newName} atualizado.`);
    }
    
    readProduct(id) {
        const product = this.productsPossible[id];

        if (!product) {
            this.output("Produto não encontrado.");
            return;
        }
        this.output(`Nome: ${product.name}, Preço: ${product.price}, Estoque: ${product.stock}`);
    }
    
    deleteProduct(id) {
        const deletedProduct = this.productsPossible.splice(id, 1);

        if (deletedProduct.length === 0) {
            this.output("Produto não encontrado.");
            return;
        }

        this.output(`${deletedProduct[0].name} removido da lista de produtos.`);
    }
    
    updateStockProduct(id, newStock, time) {
        const product = this.productsPossible[id];

        if (!product) {
            this.output("Produto não encontrado.");
            return;
        }

        product.updateStock(time, newStock).then(response => this.output(response))
            .catch(error => this.output(error));
    }
    
    createDiscount(id, discount) {
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