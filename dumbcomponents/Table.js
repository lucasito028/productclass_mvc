class Table{

    biuldTableCart({values = ({})}){

        document.getElementById("head-products-table").innerHTML = `
        <tr>
            <td>Id</td>
            <td>Product Name</td>
            <td>Stock</td>
            <td>Price</td>
        </tr>
        `
        document.getElementById("show-products").innerHTML = `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        `
    }
    
    biuldTableProducts({values = ({})}){

        document.getElementById("head-products-table").innerHTML = `
        <tr>
            <td>Id</td>
            <td>Product Name</td>
            <td>Stock</td>
            <td>Price</td>
        </tr>
        `
        document.getElementById("show-products").innerHTML = `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        `
    }
}