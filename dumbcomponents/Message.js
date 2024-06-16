class Message{
    biuldMessage({configMessage = {
        status: "success",
        message: "Editado com Sucesso"
    }}){
        let {status, message} = configMessage
        document.getElementById("message").innerHTML=`
            <div>
                <h2>${status}</h2>
                <h3>${message}</h3>
            </div>` 
    }
}