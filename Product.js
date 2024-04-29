export class Product {
    
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    showProduct = () => {
        return {
            name: this.name,
            price: this.price,
            stock: this.stock
        };
    };

    calcularSubtotal = (stock) => {
        if (stock <= this.stock) {
            return {
                name: this.name,
                price: this.price * stock,
                response: `O resultado deu ${this.price * stock}`
            };
        } else {
            return {
                name: null,
                price: null,
                response: "Não foi possível ultrapassar o valor"
            };
        }
    };

    updateStock = (time, valueStock) => {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                this.stock = this.stock + valueStock;
            }, 750);
    
            setTimeout(() => {
                clearInterval(interval);
                resolve({
                    name: `O produto ${this.name} está com estoque de ${this.stock} unidades`,
                    stock: null,
                    response: "Estoque atualizado com sucesso"
                });
            }, time * 1000);
        });
    };

    //Aqui não sei onde implementar
    createDiscount = (time, valueDiscount) => {
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                resolve({
                    message: `O desconto está na ativa!! de ${valueDiscount}%\n\nProduto ${
                        this.name
                    } está custando: ${(this.price / (1 + valueDiscount / 100)).toFixed(2)}`
                });
            }, 750);
    
            setTimeout(() => {
                clearInterval(interval);
                reject({
                    name: null,
                    stock: null,
                    response: `O desconto deu errado`
                });
            }, time * 1000);
        });
    };
}

//module.exports = Product;