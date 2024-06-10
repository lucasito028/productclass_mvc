class View{
    static init(){
        alert("Iniciado")
        let selectedBox = document.getElementById("options-possible");
        this.choose = parseInt(selectedBox.options[selectedBox.selectedIndex].value);   
        console.log(this.choose)
    }
}