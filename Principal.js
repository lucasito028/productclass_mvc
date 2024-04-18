class Principal{

    static main(){

        /*
        // Criar uma instância de Product
        const product = new Product("Produto 1", 10, 100);
        
        // Testar o método showProduct
        console.log("Detalhes do produto:");
        console.log(product.showProduct());

        // Testar o método calcularSubtotal
        const subtotal = product.calcularSubtotal(5);
        console.log("\nSubtotal do produto para 5 unidades:");
        console.log(subtotal);

        // Testar o método updateStock (usando Promises)
        console.log("\nAtualizando o estoque do produto:");
        product.updateStock(3, 50)
            .then(response => console.log(response))
            .catch(error => console.error(error));

        // Testar o método createDiscount (usando Promises)
        console.log("\nCriando desconto para o produto:");
        product.createDiscount(2, 10)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    */
   
    let escolha;
                
    while (true) {
                  // Solicita ao usuário que escolha uma opção
    escolha = prompt(`Escolha uma opção:\n
    1 - No Cliente\n
    2 - No ADMIN\n
    3 - Sair`);
              
    escolha = parseInt(escolha);
              
            switch (escolha) {
                case 1:
                    alert("Você selecionou a opção No Cliente.");
                break;
                case 2:
                    alert("Você selecionou a opção No ADMIN.");
                break;
                case 3:
                    alert("Você selecionou a opção Sair. Encerrando o ciclo.");
                    return; 
                default:
                    alert("Opção inválida. Tente novamente.");
                break;
                  }
                }
            } 
   }

Principal.main();
