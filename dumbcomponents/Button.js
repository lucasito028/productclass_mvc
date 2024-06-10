export class Button{

    biuldForm({atributes = {}}){
        
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