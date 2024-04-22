import {ProductController} from './ProductController.js';

class ProductView{

    constructor(){
        let ProductController = new ProductController();
    }
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
                    ProductView.costumerchoise();
                break;
                case 2:
                    alert("Você selecionou a opção No ADMIN.");
                    //this.adminchoise();
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
            
            static costumerchoise() {
                while (true) {
                    let c1 = prompt(`Escolha uma opção como cliente:\n
                    1 - Adicionar Produto no Carrinho\n
                    2 - Remover um Item do Carrinho\n
                    3 - Alterar Quantidade de um Produto no Carrinho\n
                    4 - Ver Subtotal de um Produto no Carrinho\n
                    5 - Finalizar Compra\n
                    0 - Sair do Cliente`);
            
                    c1 = parseInt(c1);
            
                    switch (c1) {
                        case 1:
                            let productIndexToAdd = parseInt(prompt("Digite o índice do produto que deseja adicionar:"));
                            let quantityToAdd = parseInt(prompt("Digite a quantidade que deseja adicionar:"));
                            this.ProductController.addToCart(productIndexToAdd, quantityToAdd);
                            break;
                        case 2:
                            let productIndexToRemove = prompt("Digite o índice do produto que deseja remover:");
                            let quantityToRemove = prompt("Digite a quantidade que deseja remover:");
                            this.ProductController.removestockFromCart(productIndexToRemove, quantityToRemove);
                            break;
                        case 3:
                            let productIndexToChange = prompt("Digite o índice do produto que deseja alterar:");
                            let quantityToChange = prompt("Digite a quantidade desejada:");
                            this.ProductController.alterstockfromcart(productIndexToChange, quantityToChange);
                            break;
                        case 4:
                            let productIndexToCalculate = prompt("Digite o índice do produto que deseja calcular o subtotal:");
                            this.ProductController.calculateSubtotal(productIndexToCalculate);
                            break;
                        case 5:
                            this.ProductController.checkout();
                            break;
                        case 0:
                            alert("Você saiu do Cliente.");
                            return;
                        default:
                            alert("Opção inválida. Tente novamente.");
                            break;
                    }
                }
            }

    /*adminchoise(){
        
    }*/
   }

ProductView.main();