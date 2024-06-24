export class Table {
    buildTable({ products = [
        {
            name: "Example of Product",
            price: 10.00,
            stock: 30
        },
        {
            name: "Example of Product 2",
            price: 12.00,
            stock: 33
        }
    ]}) {
        // Cria a estrutura inicial da tabela
        document.getElementById("table-show").innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody id="show-products">
                </tbody>
            </table>
        `;
        
        // Adiciona os produtos na tabela
        products.forEach((product, index) => {
            document.getElementById("show-products").innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.stock}</td>
                    <td>${product.price}</td>
                </tr>
            `;
        });
    }

    
}
