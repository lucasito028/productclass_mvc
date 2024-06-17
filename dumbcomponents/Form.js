class Form{

    biuldForm({atributes = {
        number: "id"
    }}){
        document.getElementById("root").innerHTML = `
        <form id="form">
        </form>
        `
        let {atributes} = atributes

        for(const[type, key] of Object.entries(atributes)){
            document.getElementById("form").innerHTML = `
            <div>
                 <span>${key}:</span>
                <input type=${type} name=${key} id=${key}>
            </div>
            `
        }
    }
}