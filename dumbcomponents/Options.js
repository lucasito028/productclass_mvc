export class Options{

    biuldOption({config = {
        create: "Create",
        update: "Update",
        delete: "Delete"
    }}){
        document.getElementById("root").innerHTML = ``

        for(const[action, value] of Object.entries(config)){
            document.getElementById("root").innerHTML += `
            <p><button onclick="${action}()">${value}</button></p>`
        }
        document.getElementById("root").innerHTML += `
                <p><button onclick="exit()">Sair</button></p>
        `
    }
  }
