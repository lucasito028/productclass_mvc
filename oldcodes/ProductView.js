import {ProductController} from './ProductController.js';
import {Form} from './../dumbcomponents/Form.js';
import {Table} from './../dumbcomponents/Table.js';
import {Message} from './../dumbcomponents/Message.js';
import {Costumer} from './Costumer.js';
import {Admin} from './Admin.js';

class ProductView{

    static ProductController = new ProductController();
    static Form = new Form();
    static Table = new Table();
    static Message = new Message();
    static Costumer = new Costumer();
    static Admin = new Admin();

    static main(){

        while (true) {  

            let selectedBox = document.getElementById("choose");
            this.choose = selectedBox.options[selectedBox.selectedIndex].value;   
            console.log(this.choose)
                
            switch (this.choose) {
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

            let id = null
            let stock = null

            this.choose =
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

            this.choose = parseInt(this.choose);

            switch (this.choose) {
                case 1:
                    id = parseInt(prompt(`${ProductView.ProductController.listAllProduct()}
                    ${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que deseja adicionar:`));
                    stock = parseInt(prompt(`Digite a quantidade que deseja adicionar:`));

                    ProductView.ProductController.addToCart(id, stock);
                    break;
                case 2:
                    id = parseInt(prompt(`${ProductView.ProductController.listAllProduct()}
                    ${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que deseja Aumentar:`));
                    stock = parseInt(prompt(`Digite a quantidade que deseja Aumentar:`));

                    ProductView.ProductController.addItensStockFromCart(id, stock);
                    break;
                case 3:
                    id = parseInt(prompt(`${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que Remover`));
                    stock = parseInt(prompt(`Digite a quantidade desejada para Remover:`));

                    ProductView.ProductController.removeItensStockFromCart(id, stock);
                    break;
                case 4:
                    id = parseInt(prompt(`${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que deseja Excluir`));

                    ProductView.ProductController.removeProductFromCart(id);
                    break;
                case 5:
                    id = prompt(`${ProductView.ProductController.listallProductFromCart()}
                    Digite o índice do produto que deseja calcular o subtotal:`);

                    ProductView.ProductController.calculateSubtotalById(id);
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

            
            let name = null
            let price = null
            let stock = null
            let timeInSeconds = null

            let productList = ProductView.ProductController.listAllProduct();

            this.choose = prompt(`
                ${productList}
                Escolha uma opção como Admin:\n
                1 - Cadastrar um Produto\n
                2 - Atualizar um Produto\n
                3 - Alterar Estoque de um Produto\n
                4 - Ver Subtotal de um Produto\n
                5 - Criar Desconto\n
                6 - Deletar Produto pelo Indice\n
                0 - Sair como Admin`);

            this.choose = parseInt(this.choose);

            switch (this.choose) {
                case 1:
                    name = prompt(`Digite o nome do produto:`);
                    price = parseFloat(prompt(`Digite o preço do produto:`));
                    stock = parseInt(prompt(`Digite o estoque do produto:`));

                    ProductView.ProductController.createProduct(name, price, stock);
                    break;
                case 2:
                    id = parseInt(prompt(`${ProductView.ProductController.listAllProduct()}
                    Digite o índice do produto que deseja atualizar:`));
                    name = prompt(`Digite o novo nome do produto:`);
                    price = parseFloat(prompt(`Digite o novo preço do produto:`));
                    stock = parseInt(prompt(`Digite o novo estoque do produto:`));

                    ProductView.ProductController.updateProduct(id, name, price, stock);
                    break;
                case 3:
                    id = parseInt(prompt(`${ProductView.ProductController.listAllProduct()}
                    Digite o índice do produto que deseja alterar o estoque:`));
                    stock = parseFloat(prompt(`Digite a quantidade por segundos`));
                    timeInSeconds = parseInt(prompt(`Digite o tempo em segundos`));

                    ProductView.ProductController.updateStockProduct(id, stock, timeInSeconds);
                    break;
                case 4:
                    id = parseInt(prompt(`Digite o índice do produto que deseja 
                    calcular o subtotal:`));
                    stock = parseInt(prompt(`Quantidade que quer selecionar`));

                    ProductView.ProductController.calculateSubtotalByAllProduct(id, stock);
                    break;
                case 5:
                    id = parseInt(prompt(`Digite o índice do produto que deseja aplicar o desconto:`));
                    timeInSeconds = parseInt(prompt(`Digite Quantos segundos o desconto deve ficar:`));
                    let discount = parseFloat(prompt(`Digite o valor do desconto a ser aplicado (em %):`));
                    
                    ProductView.ProductController.createDiscount(id, timeInSeconds, discount);
                    break;
                case 6:
                    id = parseInt(prompt(`Digite o índice do produto para deletar Produto`));

                    ProductView.ProductController.deleteProduct(id);                    
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