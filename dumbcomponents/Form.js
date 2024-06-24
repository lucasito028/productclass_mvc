export class Form{

    biuldForm({atributes = {
        name: "text",
        stock: "number",
        price: "number",
    }}){
        document.getElementById("root").innerHTML = `
        <form id="form">
        </form> `

        for(const[key, type] of Object.entries(atributes)){
            document.getElementById("form").innerHTML += `
            <div>
                 <span>${key}:</span>
                <input type=${type} name=${key} id=${key}>
            </div>`
        }
       
    }
}