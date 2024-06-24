import { Costumer } from './people/Costumer.js';
import { Admin } from './people/Admin.js';

import { Message } from './../dumbcomponents/Message.js';
import { Options } from './../dumbcomponents/Options.js';
import { Table } from './../dumbcomponents/Table.js';
import { Form } from './../dumbcomponents/Form.js';

export class Controller {

    constructor() {
        this.table = new Table();
        this.admin = new Admin();
        this.costumer = new Costumer();
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
        let otherProducts = admin.products

        let message = this.message
        let table = this.table
        let form = this.form
        let options = this.options

        message.biuldMessage({status: "Costumer Choise Win", message: "Now you're a Costumer"})
        table.buildTable({products})
        options.biuldOption({});

    }
    adminOption() {
        let entity = this.admin
        let message = this.message
        let products = entity.products

        let table = this.table
        let form = this.form
        let options = this.options

        message.biuldMessage({status: "Admin Choise Win", message: "Now you're a Admin"})
        table.buildTable({products})
        options.biuldOption({});

    }

}
