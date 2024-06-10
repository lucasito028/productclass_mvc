import {Product} from '../Product.js';

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

    allDiscount = [
        
    ]

    productsInTheCart = [
        new Product("Produto 1", 10.10, 2),
        new Product("Produto 2", 20.30, 5),
        new Product("Produto 3", 15.50, 9),
    ];

    output = {
        message: null
    }

    listallProductFromCart() {

        let productarray = ({});

        if (this.productsInTheCart.length === 0) {
            return this.msg = "O carrinho está vazio.";
        }

        this.msg = `Lista de Todos os Produtos do Carrino\n`;

        this.productsInTheCart.forEach((product, index) => {
            let id = index;
            let name = product.name;
            let price = product.price.toFixed(2);
            let stock = product.stock;

            {productarray.push({id, name, price, stock})}
        });

        return {message = ""} = this.output;
    }

    addToCart(id, stock) {

        this.msg = "";
    
        const productToAdd = this.productsPossible[id - 1]; 

        if (!productToAdd) {
            return this.msg = "Produto não encontrado.";
        }

        if (productToAdd.stock < stock) {
            return this.msg = "Quantidade solicitada indisponível em estoque.";
        }
    
        const existingProductIndex = 
        this.productsInTheCart.findIndex(product => product.name === productToAdd.name);
    
        if (existingProductIndex !== -1) {
            this.productsInTheCart[existingProductIndex].quantity += stock;
        } else {
            const productCopy = new Product(productToAdd.name, productToAdd.price, stock);
            this.productsInTheCart.push(productCopy);
        }
    
        productToAdd.stock -= stock;
    
        return this.msg = `${stock} unidades de ${productToAdd.name} adicionadas ao carrinho.`;
    }

    addItensStockFromCart(id, stock) {
        this.msg = "";

        const productInCart = this.productsInTheCart[id - 1]; 
        
        if (!productInCart) {
            return this.msg = "Produto não encontrado no carrinho.";
        }
    
        const productPossible = this.productsPossible.find(product => product.name === productInCart.name);
        const currentStock = productPossible ? productPossible.stock + productInCart.stock : 0;
    
        if (currentStock < stock) {
            return this.msg = "Quantidade solicitada indisponível em estoque.";
        }
    
        productPossible.stock -= stock;
        productInCart.stock += stock;
    
        return this.msg `${stock} unidades de ${productInCart.name} adicionadas ao estoque.`;
    }
    
    removeItensStockFromCart(id, stock) {
        this.msg = "";
        const productInCart = this.productsInTheCart[id - 1]; 
        
        if (!productInCart) {
            return this.msg = "Produto não encontrado no carrinho.";
        }
    
        if (productInCart.stock < stock) {
            return this.msg = "Quantidade solicitada maior que a quantidade no carrinho.";
        }
    
        const productPossible = this.productsPossible.find(product => product.name === productInCart.name);
        if (productPossible) {
            productPossible.stock += stock;
        }
    
        productInCart.stock -= stock;
    
        return this.msg = `${stock} unidades de ${productInCart.name} removidas do carrinho.`;
    }
    

    removeProductFromCart(id) {
        this.msg = "";
        if (id < 1 || id > this.productsInTheCart.length) {
            return this.msg = "ID de produto inválido.";
        }
    
        const removedProduct = this.productsInTheCart.splice(id - 1, 1)[0]; 

        const productPossible = this.productsPossible.find(product => product.name === removedProduct.name);
        if (productPossible) {
            productPossible.stock += removedProduct.quantity;
        }
    
        return this.msg = `O produto ${removedProduct.name} foi removido do carrinho.`;
    }

    calculateSubtotalById(id) {
        this.msg = "";
        if (id < 1 || id > this.productsInTheCart.length) {
            return this.msg = "ID de produto inválido.";
        }
    
        const product = this.productsInTheCart[id - 1];
        const subtotal = product.price * product.stock;
    
        this.output(`Subtotal do produto ${product.name}: $${subtotal.toFixed(2)}`);
    }

    implementsDiscount(iddiscount) {
    
    }

    calculateTotalFromCart(){
        this.msg = "";
        let total = 0;

        this.productsInTheCart.forEach(product => {
            const subtotal = product.price * product.stock;
            total += subtotal;
        });

        this.output(`Total a ser pago: $${total.toFixed(2)}`);
    }

    checkout() {
        this.msg = "";
        alert("Venda finalizada. Obrigado por comprar conosco!");
        this.productsInTheCart = []; 
    }

    /* Admin Functions */
    listAllProduct() {
        this.msg = "";

        this.msg += "Lista de todos os produtos disponiveis:\n\n";

        if (this.productsPossible.length === 0) {
            this.output("Não existe produto");
            return;
        }

        this.productsPossible.forEach((product, id) => {
            this.msg += `${id + 1}. Nome: ${product.name}, 
            Preço: ${product.price}, 
            Estoque: ${product.stock}\n\n`;
        });
        return this.msg;
    }

    createProduct(name, price, stock) {
        this.msg = "";
        const newProduct = new Product(name, price, stock);

        this.productsPossible.push(newProduct);

        this.output(`${name} adicionado à lista de produtos.`);
    }
    
    updateProduct(id, newName, newPrice, newStock) {
        this.msg = "";
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
    
    deleteProduct(id) {
        this.msg = "";
        const deletedProduct = this.productsPossible.splice(id, 1);

        if (deletedProduct.length === 0) {
            this.output("Produto não encontrado.");
            return;
        }

        this.output(`${deletedProduct[0].name} removido da lista de produtos.`);
    }
    
    calculateSubtotalByAllProduct(id, stock) {
        this.msg = "";
        const product = this.productsPossible[id - 1]; // Ajustando o índice do array
        
        if (!product) {
            this.output("Produto não encontrado.");
            return;
        }
    
        const subtotalInfo = product.calcularSubtotal(stock);
    
        if (subtotalInfo) {
            this.output(`Subtotal do produto ${subtotalInfo.name}: ${subtotalInfo.response}`);
        } else {
            this.output("Não foi possível calcular o subtotal do produto.");
        }
    }
    
    updateStockProduct(id, newStock, time) {
        this.msg = "";
        const product = this.productsPossible[id - 1]; 
    
        if (!product) {
            this.output("Produto não encontrado.");
            return;
        }
    
        product.updateStock(time, newStock)
            .then(response => {
                this.output(response.name);
                this.output(response.response);
            })
            .catch(error => this.output(error));
    }
    
    createDiscount(id, time, discount) {
        this.msg = "";
        const product = this.productsPossible[id];
    
        if (!product) {
            this.msg = "Produto não encontrado.";
            return;
        }
    
        product.createDiscount(time, discount)
            .then(response => this.output(response.message))
            .catch(error => this.output(error.response));
        
            return;
    }
}