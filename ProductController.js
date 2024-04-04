class ProductController extends Product {

    constructor() {
        super();
        this.products = {}; 
    }

    create(name, price, stock) {
        const product = new Product(name, price, stock);
        this.products[product.id] = product; 
        return product;
    }

    update(id, newPrice, newStock) {
        const product = this.products[id];
        if (product) {
            product.price = newPrice;
            product.stock = newStock;
            return product;
        }
        return null;
    }

    listAll() {
        return Object.values(this.products);
    }

    listOne(id) {
        return this.products[id]; 
    }

    delete(id) {
        if (this.products[id]) {
            delete this.products[id]; 
            return true;
        }
        return false;
    }
}
