class Product {
    
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    showProduct = () => {
        const value = {
            name: this.name,
            price: this.price,
            stock: this.stock
        };
        return value;
    };

    calcularSubtotal = (stock) => {
        let value = {};
        if (stock <= this.stock) {
            value = {
                name: this.name,
                price: this.price * stock,
                response: `O resultado deu ${this.price * stock}`
            };
        } else {
            value = {
                name: null,
                price: null,
                response: "Não deu para ultrapassar o valor"
            };
        }
        return value;
    };

    updateStock = (time, valueStock) => {
        let value = {};
        const interval = setInterval(() => {
            this.stock = this.stock + valueStock;
        }, 750);

        setTimeout(() => {
            clearInterval(interval);
            value = {
                name: null,
                stock: null,
                response: "Teste 3"
            };
        }, time * 1000);

        return value;
    };

    createDiscount = (time, valueDiscount) => {
        let value = {};
        const interval = setInterval(() => {
            value.message = `O desconto está na ativa!! de ${valueDiscount}%\n\nProduto ${
                this.name
            } está custando: ${(this.price / (1 + valueDiscount / 100)).toFixed(2)}`;
        }, 750);

        setTimeout(() => {
            clearInterval(interval);
            value = {
                name: null,
                stock: null,
                response: `O desconto deu errado`
            };
        }, time * 1000);

        return value;
    };
}