class ProductController extends Product {

    constructor() {
        this.products = []; 
    }

    create(name, price, stock) {
        const product = new Product(name, price, stock); 
        this.products.push(product);
        return product;
    }

    update(name, newPrice, newStock) {
        const product = this.products.find(prod => prod.name === name);
        if (product) {
            product.price = newPrice; 
            product.stock = newStock; 
            return product; 
        }
        return null; 
    }

    listAll() {
        return this.products;
    }

    listOne(name) {
        return this.products.find(prod => prod.name === name); 
    }

    delete(name) {
        const index = this.products.findIndex(prod => prod.name === name); 
        if (index !== -1) {
            this.products.splice(index, 1); 
            return true; 
        }
        return false; 
    }
}


