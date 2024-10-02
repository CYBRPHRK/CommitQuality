import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'

describe('My Product page application', () => {
    it('should open and get verified successfully.', async () => {
        await HomePage.open()

        await expect(HomePage.navigateToPage(1)).toHaveText('Products')
        await expect(HomePage.navigateToPage(2)).toHaveText('Add Product')
        await expect(HomePage.navigateToPage(3)).toHaveText('Practice')
        await expect(HomePage.navigateToPage(4)).toHaveText('Learn')
        await expect(HomePage.navigateToPage(5)).toHaveText('Login')

        await expect(HomePage.banner).toHaveText('ADVERTISE YOUR PRODUCT / SERVICE HERE: Contact me on X @CommitQuality')
        await expect(HomePage.bannerLink()).toHaveText('@CommitQuality')

        await HomePage.filterInput().setValue('Hello World!')
        await expect(HomePage.filterInput()).toHaveValue('Hello World!')

        await expect(HomePage.filterButton()).toHaveText('Filter')
        await expect(HomePage.filterResetButton()).toHaveText('Reset')

        await expect(HomePage.tableHeader(1)).toHaveText('ID')
        await expect(HomePage.tableHeader(2)).toHaveText('Name')
        await expect(HomePage.tableHeader(3)).toHaveText('Price')
        await expect(HomePage.tableHeader(4)).toHaveText('Date Stocked')

        await expect(HomePage.tableData(1, 1)).toHaveText('11')
        await expect(HomePage.tableData(1, 2)).toHaveText('Product 2')
        await expect(HomePage.tableData(1, 3)).toHaveText('15')
        await expect(HomePage.tableData(1, 4)).toHaveText('2021-02-01')
        
        await expect(HomePage.tableData(2, 1)).toHaveText('10')
        await expect(HomePage.tableData(2, 2)).toHaveText('Product 1')
        await expect(HomePage.tableData(2, 3)).toHaveText('10')
        await expect(HomePage.tableData(2, 4)).toHaveText('2021-01-01')

        await expect(HomePage.tableData(3, 1)).toHaveText('9')
        await expect(HomePage.tableData(3, 2)).toHaveText('Product 2')
        await expect(HomePage.tableData(3, 3)).toHaveText('15')
        await expect(HomePage.tableData(3, 4)).toHaveText('2021-02-01')

        await expect(HomePage.tableData(4, 1)).toHaveText('8')
        await expect(HomePage.tableData(4, 2)).toHaveText('Product 2')
        await expect(HomePage.tableData(4, 3)).toHaveText('15')
        await expect(HomePage.tableData(4, 4)).toHaveText('2021-02-01')

        await expect(HomePage.tableData(5, 1)).toHaveText('7')
        await expect(HomePage.tableData(5, 2)).toHaveText('Product 1')
        await expect(HomePage.tableData(5, 3)).toHaveText('10')
        await expect(HomePage.tableData(5, 4)).toHaveText('2021-01-01')

        await expect(HomePage.tableData(6, 1)).toHaveText('6')
        await expect(HomePage.tableData(6, 2)).toHaveText('Product 2')
        await expect(HomePage.tableData(6, 3)).toHaveText('15')
        await expect(HomePage.tableData(6, 4)).toHaveText('2021-02-01')

        await expect(HomePage.tableData(7, 1)).toHaveText('5')
        await expect(HomePage.tableData(7, 2)).toHaveText('Product 1')
        await expect(HomePage.tableData(7, 3)).toHaveText('10')
        await expect(HomePage.tableData(7, 4)).toHaveText('2021-01-01')

        await expect(HomePage.tableData(8, 1)).toHaveText('4')
        await expect(HomePage.tableData(8, 2)).toHaveText('Product 2')
        await expect(HomePage.tableData(8, 3)).toHaveText('15')
        await expect(HomePage.tableData(8, 4)).toHaveText('2021-02-01')

        await expect(HomePage.tableData(9, 1)).toHaveText('3')
        await expect(HomePage.tableData(9, 2)).toHaveText('Product 1')
        await expect(HomePage.tableData(9, 3)).toHaveText('10')
        await expect(HomePage.tableData(9, 4)).toHaveText('2021-01-01')

        await expect(HomePage.tableData(10, 1)).toHaveText('2')
        await expect(HomePage.tableData(10, 2)).toHaveText('Product 2')
        await expect(HomePage.tableData(10, 3)).toHaveText('15')
        await expect(HomePage.tableData(10, 4)).toHaveText('2021-02-01')

        await expect(HomePage.showMoreButton).toHaveText('Show More')
        await HomePage.showMoreButton.click();

        await expect(HomePage.tableData(11, 1)).toHaveText('1')
        await expect(HomePage.tableData(11, 2)).toHaveText('Product 1')
        await expect(HomePage.tableData(11, 3)).toHaveText('10')
        await expect(HomePage.tableData(11, 4)).toHaveText('2021-01-01')

        await HomePage.filterButton().click();
        await HomePage.filterResetButton().click();
        await expect(HomePage.filterInput()).toHaveValue('')

        await expect(HomePage.addProduct).toHaveText('Add a Product');
        await HomePage.addProduct.click();

        //await expect(browser.getUrl()).to.equal('https://commitquality.com/add-product');
    })
})

