import { CostumerController } from './peopleController/CostumerController.js';
import { AdminController } from './peopleController/AdminController.js';

import { Message } from './../dumbcomponents/Message.js';
import { Options } from './../dumbcomponents/Options.js';
import { Table } from './../dumbcomponents/Table.js';
import { Form } from './../dumbcomponents/Form.js';

export class Controller {

    constructor() {
        this.table = new Table();
        this.admin = new AdminController();
        this.costumer = new CostumerController();
        this.message = new Message();
        this.options = new Options();
        this.form = new Form();
    }

    handleSelection(value) {
        switch(value) {
            case "1":
                this.costumerOption();
                break;
            case "2":
                this.adminOption();
                break;
        }
    }
    costumerOption() {

        let entity = this.costumer
        let admin = this.admin
        let products = entity.products

        let message = this.message
        let table = this.table
        let options = this.options

        message.biuldMessage({status: "Costumer Choise Win", message: "Now you're a Costumer"})
        table.buildTable({products})
        options.biuldOption({values : ['Add Product in Cart', 'Alter stock in Cart', 'Delete Product Car']});

    }
    adminOption() {

        let entity = this.admin
        let message = this.message
        let products = entity.products

        let table = this.table
        let options = this.options

        message.biuldMessage({status: "Admin Choise Win", message: "Now you're a Admin"})
        table.buildTable({products})
        options.biuldOption({values : ['Create Product', 'Update Product', 'Delete Product']});

    }

    formBiuld(){
        let form = this.form
        form.biuldForm()
    }

}
