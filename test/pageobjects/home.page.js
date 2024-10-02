import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
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

    get banner () {
        return $('//*[@id="root"]/div/div/div/div[1]/p');
    }

    bannerLink () {
        return this.banner.$('a');
    }

    get filter () {
        return $('//*[@id="root"]/div/div/div/div[2]');
    }

    filterInput () {
        return this.filter.$('input');
    }

    filterButton () {
        return this.filter.$('button=Filter');
    }

    filterResetButton () {
        return this.filter.$('button=Reset');
    }

    get table () {
        return $('//*[@id="root"]/div/div/div/table');
    }

    tableHeader (col) {
        return this.table.$(`thead tr th:nth-child(${col})`);
    }

    tableRow (row) {
        return this.table.$(`tbody tr:nth-child(${row})`)
    }

    tableData (row, col) {
        return this.tableRow(row).$(`td:nth-child(${col})`)
    }

    get showMoreButton () {
        return $('//*[@id="root"]/div/div/div/p[1]/button');
    }

    get addProduct () {
        return $('a[data-testid="add-a-product-button"]');
        //return $('//a[normalize-space(text())="Add a Product"]');
        //return $('.add-product-button');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new HomePage();