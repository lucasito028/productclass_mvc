class Form{

    biuldForm({atributes = {}}){
        document.getElementById("root").innerHTML = `
        <form id="form">
        </form>
        `
        let {atributes} = atributes

        for(const[key, type] of Object.entries(atributes)){
            document.getElementById("form").innerHTML = `
            <div>
                 <span>${key}:</span>
                <input type="${type}">
            </div>
            `
        }
    }
}