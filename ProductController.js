class ProductController extends Product {

    constructor() {
        this.products = []; // Initialize an empty array to store products
    }

    create(name, price, stock) {
        const product = new Product(name, price, stock); // Create a new product instance
        this.products.push(product); // Add the new product to the products array
        return product; // Return the created product
    }

    update(name, newPrice, newStock) {
        const product = this.products.find(prod => prod.name === name); // Find the product by name
        if (product) {
            product.price = newPrice; // Update the price
            product.stock = newStock; // Update the stock
            return product; // Return the updated product
        }
        return null; // Return null if product not found
    }

    listAll() {
        return this.products; // Return all products
    }

    listOne(name) {
        return this.products.find(prod => prod.name === name); // Find and return a specific product by name
    }

    delete(name) {
        const index = this.products.findIndex(prod => prod.name === name); // Find the index of the product by name
        if (index !== -1) {
            this.products.splice(index, 1); // Remove the product from the array
            return true; // Return true indicating successful deletion
        }
        return false; // Return false if product not found
    }
}


