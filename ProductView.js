import {ProductController} from './ProductController.js';

class ProductView{

    static ProductController = new ProductController();
  
    static main(){

        let escolha;
                    
        while (true) {  
        escolha =
        prompt(
        `Escolha uma opção:\n
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
        while (true) {

            let c1 =
                prompt(`
                ${ProductView.ProductController.listAllProduct()}
                ${ProductView.ProductController.listallProductFromCart()}
                Escolha uma opção como cliente:\n
                1 - Adicionar Produto no Carrinho\n
                2 - Almentar Quantidade de um Produto no Carrinho\n
                3 - Remover Quantidade de um Produto no Carrinho\n
                4 - Excluir um Produto em especifico pelo Id\n
                5 - Ver Subtotal de um Produto no Carrinho\n
                6 - Finalizar Compra\n
                0 - Sair do Cliente`);

            c1 = parseInt(c1);

            switch (c1) {
                case 1:
                    let productIndexToAddToCart = parseInt(prompt(`
                    ${ProductView.ProductController.listAllProduct()}
                    ${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que deseja adicionar:`));

                    let quantityToAdd = parseInt(prompt(`Digite a quantidade que deseja adicionar:`));
                    ProductView.ProductController.addToCart(productIndexToAddToCart, quantityToAdd);
                    break;
                case 2:
                    let productIndexToRemoveStock = parseInt(prompt(`
                    ${ProductView.ProductController.listAllProduct()}
                    ${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que deseja Aumentar:`));

                    let quantityToRemoveInTheCart = parseInt(prompt(`Digite a quantidade que deseja Aumentar:`));
                    ProductView.ProductController.addItensStockFromCart(productIndexToRemoveStock, quantityToRemoveInTheCart);
                    break;
                case 3:
                    let productIndexToAdd = parseInt(prompt(`
                    ${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que Remover`));

                    let quantityToAddinCart = parseInt(prompt(`Digite a quantidade desejada para Remover:`));
                    ProductView.ProductController.removeItensStockFromCart(productIndexToAdd, quantityToAddinCart);
                    break;
                case 4:
                    let productIndexToRemove = parseInt(prompt(`
                    ${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que deseja Excluir`));

                    ProductView.ProductController.removeProductFromCart(productIndexToRemove);
                    break;
                case 5:
                    let productIndexToCalculate = prompt(`
                    ${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que deseja calcular o subtotal:`);
                    ProductView.ProductController.calculateSubtotalById(productIndexToCalculate);
                    break;
                case 6:
                    ProductView.ProductController.calculateTotalFromCart()
                    ProductView.ProductController.checkout();
                    return;
                case 0:
                    `Você saiu do Cliente.`;
                    return;
                default:
                    `Opção inválida. Tente novamente.`;
                    break;
            }
        }
    }

    static adminChoise() {
        while (true) {

            let productList = ProductView.ProductController.listAllProduct();

            let c1 = prompt(`
                ${productList}
                Escolha uma opção como Admin:\n
                1 - Cadastrar um Produto\n
                2 - Atualizar um Produto\n
                3 - Alterar Estoque de um Produto\n
                4 - Ver Subtotal de um Produto\n
                5 - Criar Desconto\n
                6 - Deletar Produto pelo Indice\n
                0 - Sair como Admin`);

            c1 = parseInt(c1);

            switch (c1) {
                case 1:
                    let name = prompt(`Digite o nome do produto:`);
                    let price = parseFloat(prompt(`Digite o preço do produto:`));
                    let stock = parseInt(prompt(`Digite o estoque do produto:`));
                    ProductView.ProductController.createProduct(name, price, stock);
                    break;
                case 2:
                    let productIdToUpdate = parseInt(prompt(`
                    ${ProductView.ProductController.listAllProduct()}
                    Digite o índice do produto que deseja atualizar:`));

                    let newName = prompt(`Digite o novo nome do produto:`);
                    let newPrice = parseFloat(prompt(`Digite o novo preço do produto:`));
                    let newStock = parseInt(prompt(`Digite o novo estoque do produto:`));

                    ProductView.ProductController.updateProduct(productIdToUpdate, newName, newPrice, newStock);
                    break;
                case 3:
                    let idProduct = parseInt(prompt(`
                    ${ProductView.ProductController.listAllProduct()}
                    Digite o índice do produto que deseja alterar o estoque:`));

                    let newStockByTime = parseFloat(prompt(`Digite a quantidade por segundos`));
                    let timebySeconds = parseInt(prompt(`Digite o tempo em segundos`));

                    ProductView.ProductController.updateStockProduct(idProduct, newStockByTime, timebySeconds);
                    break;
                case 4:
                    let productIdToCalculate = parseInt(prompt(`Digite o índice do produto que deseja 
                    calcular o subtotal:`));
                    let stockChoose = parseInt(prompt(`Quantidade que quer selecionar`));

                    ProductView.ProductController.calculateSubtotalByAllProduct(productIdToCalculate, stockChoose);
                    break;
                case 5:
                    let productIdToApplyDiscount = parseInt(prompt(`Digite o índice do produto que deseja aplicar o desconto:`));
                    let timeInSeconds = parseInt(prompt(`Digite Quantos segundos o desconto deve ficar:`));
                    let discount = parseFloat(prompt(`Digite o valor do desconto a ser aplicado (em %):`));
                    
                    ProductView.ProductController.createDiscount(productIdToApplyDiscount, timeInSeconds, discount);
                    break;
                case 6:
                    let idProductToDelete = parseInt(prompt(`Digite o índice do produto para deletar Produto`));

                    ProductView.ProductController.deleteProduct(idProductToDelete);                    
                    break;
                case 0:
                    `Saiu de Admin`;
                    return;
                default:
                    `Opção inválida. Tente novamente.`;
                    break;
            }
        }
    }

}

ProductView.main();