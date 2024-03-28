class Produto {

    constructor(name, price, stock){

        this.name = name;
        this.price = price;
        this.stock = stock;

    }

    value = {}
    

    showproduct = () => {

        const value = {
            name: this.name,
            price: this.price,
            stock: this.stock
        }
        
        return value;

    }

    calcularSubtotal = (stock) => {

        if(stock <= this.stock) {
            value = {
                name: this.name,
                price: this.price * stock,
                response: `O Resultado deu ${this.price}`
            }
        }else {
            value = {
                response: "Não Deu para Ultrapassar o Valor"
            }
        }

        return value;

    }


    updatestock = (time, valuestock) => {

        const interval = setInterval(() => {
            this.stock = this.stock + valuestock
        }, 750)
        
        setTimeout(() => {
            clearInterval(interval);
            value = {
                name: this.name,
                stock: this.stock,
                response: `Teste 3`
            }
        }, time * 1000)

        return value;
    }


    creatediscount = (time, valuediscount) => {

        const interval = setInterval(() => {
            console.log(`O Desconto está na ativa!! de ${valuediscount}%\n\nProduto ${this.name} está custando: ${this.price / (1 + (valuediscount / 100))}`)
        }, 750)
        
        setTimeout(() => {
            clearInterval(interval);
            value = {
                name: this.name,
                stock: this.stock,
                response: `Teste 3`
            }
        }, time * 1000)
        
        return value;
    }

}