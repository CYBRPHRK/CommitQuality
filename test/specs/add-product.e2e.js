import { expect } from '@wdio/globals'
import AddProduct from '../pageobjects/add-product.page.js'

describe('My Product page application', () => {
    it('should open and get verified successfully.', async () => {
        await AddProduct.open()

        await expect(AddProduct.navigateToPage(1)).toHaveText('Products')
        await expect(AddProduct.navigateToPage(2)).toHaveText('Add Product')
        await expect(AddProduct.navigateToPage(3)).toHaveText('Practice')
        await expect(AddProduct.navigateToPage(4)).toHaveText('Learn')
        await expect(AddProduct.navigateToPage(5)).toHaveText('Login')

        await expect(AddProduct.header).toHaveText('Add Product')

        await expect(AddProduct.formLabel(1)).toHaveText('Name')
        await AddProduct.formInput(1).setValue('New Product')
        await expect(AddProduct.formInput(1)).toHaveValue('New Product')

        await expect(AddProduct.formLabel(2)).toHaveText('Price')
        await expect(AddProduct.formLabel(3)).toHaveText('Date Stocked')
    })
})