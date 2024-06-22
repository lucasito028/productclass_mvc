export class Message{
    
    biuldMessage({ status = "success", message = "Mensagem Padrão"}){
        document.getElementById("message").innerHTML=`
            <div>
                <h2>${status}</h2>
                <h3>${message}</h3>
            </div>` 
    }

    alternativeMessage({configMessage = {
        status: "success",
        message: "Mensagem alternativa"
    }}){
        let {status, message} = configMessage
        
        document.getElementById("root").innerHTML=`
        <div id="message-alternative">
        </div>` 

        document.getElementById("message-alternative").innerHTML=`
            <div>
                <h2>${status}</h2>
                <h3>${message}</h3>
            </div>` 
    }

}