class Form{

    biuldForm({atributes = {}}){
        
        let {atributes} = atributes

        for(const[key, type] of Object.entries(atributes)){
            document.getElementById("mainform").innerHTML = `
            <div>
                 <span>${key}:</span>
                <input type="${type}">
            </div>
            `
        }
    }
}