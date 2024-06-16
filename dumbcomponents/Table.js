class Table{
    
    biuldTable({products = [
        {
            id: 1,
            name: "Example of Product",
            price: 10.00,
            stock: 30
        },
        {
            id: 2,
            name: "Example of Product 2",
            price: 12.00,
            stock: 33
        }
    ]}){

        document.getElementById("head-products-table").innerHTML = `
        <tr>
            <td>Id</td>
            <td>Product Name</td>
            <td>Stock</td>
            <td>Price</td>
        </tr>
        `
        products.forEach(product => {
            let {id, name, price, stock} = product
            document.getElementById("show-products").innerHTML = `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${stock}</td>
                <td>${price}</td>
            </tr>
            `  
        });
    }
}