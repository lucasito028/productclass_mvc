export class Options{

    biuldOption({values = ['Create', 'Update','Delete']}){
        document.getElementById("root").innerHTML = ``
        values.forEach((value) => {
            document.getElementById("root").innerHTML += `
            <p><button>${value}</button></p>
            `
        }   
        
    )
        document.getElementById("root").innerHTML += `
                <p><button onclick="exit()">Sair de Cliente</button></p>
        `
    }
  }
