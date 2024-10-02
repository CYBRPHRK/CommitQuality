import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddProduct extends Page {
    /**
     * define selectors using getter methods
     */
    get navbar () {
        return $('//*[@id="root"]/div/nav/div[2]');
    }

    navigateToPage (num) {
        !num ? num = 1 : num

        return this.navbar.$(`a:nth-child(${num})`);
    }

    get header () {
        return $('//*[@id="root"]/div/div/div/h1');
    }

    get form () {
        return $('//*[@id="root"]/div/div/div/form');
    }

    formComponent (num) {
        return this.form.$(`div:nth-child(${num})`);
    }

    formLabel (num) {
        return this.formComponent(num).$('label');
    }

    formInput (num) {
        return this.formComponent(num).$('input');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('add-product');
    }
}

export default new AddProduct();