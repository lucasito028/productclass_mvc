import {ProductController} from './ProductController.js';

class ProductView{

    static ProductController = new ProductController();
  
    static main(){
        let escolha;
                    
        while (true) {  
        escolha =
        prompt(`Escolha uma opção:\n
        1 - No Cliente\n
        2 - No ADMIN\n
        3 - Sair`);
                
        escolha = parseInt(escolha);
                
        switch (escolha) {
            case 1:
                alert("Você selecionou a opção No Cliente.");
                ProductView.costumerChoise();
            break;
            case 2:
                alert("Você selecionou a opção No ADMIN.");
                ProductView.adminChoise();
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
                
    static costumerChoise() {
        ProductView.ProductController.listAllProduct();
                    while (true) {
                        let c1 = 
                        prompt(`
                        ${ProductView.ProductController.listallProductFromCart()}
                        Escolha uma opção como cliente:\n
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
                                ProductView.ProductController.addToCart(productIndexToAdd, quantityToAdd);
                                break;
                            case 2:
                                let productIndexToRemove = prompt("Digite o índice do produto que deseja remover:");
                                let quantityToRemove = prompt("Digite a quantidade que deseja remover:");
                                ProductView.ProductController.removestockFromCart(productIndexToRemove, quantityToRemove);
                                break;
                            case 3:
                                let productIndexToChange = prompt("Digite o índice do produto que deseja alterar:");
                                let quantityToChange = prompt("Digite a quantidade desejada:");
                                ProductView.ProductController.alterstockfromcart(productIndexToChange, quantityToChange);
                                break;
                            case 4:
                                let productIndexToCalculate = prompt("Digite o índice do produto que deseja calcular o subtotal:");
                                ProductView.ProductController.calculateSubtotal(productIndexToCalculate);
                                break;
                            case 5:
                                ProductView.ProductController.checkout();
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

    static adminChoise() {
                    while (true) {
                        let c1 = 
                        prompt(`${ProductView.ProductController.listAllProduct()}
                        Escolha uma opção como Admin:\n
                        1 - Cadastrar um Produto\n
                        2 - Update o Produto\n
                        3 - Alterar Produto\n
                        4 - Ver Subtotal de um Produto no Carrinho\n
                        5 - Criar Desconto\n
                        0 - Sair como Admin`);
                
                        c1 = parseInt(c1);
                
                        switch (c1) {
                            case 1:
                                let productIndexToAdd = parseInt(prompt("Digite o índice do produto que deseja adicionar:"));
                                let quantityToAdd = parseInt(prompt("Digite a quantidade que deseja adicionar:"));
                                ProductView.ProductController.addToCart(productIndexToAdd, quantityToAdd);
                                break;
                            case 2:
                                let productIndexToRemove = prompt("Digite o índice do produto que deseja remover:");
                                let quantityToRemove = prompt("Digite a quantidade que deseja remover:");
                                ProductView.ProductController.removestockFromCart(productIndexToRemove, quantityToRemove);
                                break;
                            case 3:
                                let productIndexToChange = prompt("Digite o índice do produto que deseja alterar:");
                                let quantityToChange = prompt("Digite a quantidade desejada:");
                                ProductView.ProductController.alterstockfromcart(productIndexToChange, quantityToChange);
                                break;
                            case 4:
                                let productIndexToCalculate = prompt("Digite o índice do produto que deseja calcular o subtotal:");
                                ProductView.ProductController.calculateSubtotal(productIndexToCalculate);
                                break;
                            case 5:
                                ProductView.ProductController.checkout();
                                break;
                            case 0:
                                alert("Você como Admin");
                                return;
                            default:
                                alert("Opção inválida. Tente novamente.");
                                break;
                        }
                    }
            }

   }

ProductView.main();